<?php

class Wpzoom_Instagram_Widget_Settings {
    public $settings = array();

    protected static $default_settings = array(
        'access_token'    => '',
        'enable-lightbox' => true
    );

    public function __construct() {
        add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
        add_action( 'admin_init', array( $this, 'settings_init' ) );

        add_filter( 'plugin_action_links', array( $this, 'add_action_links' ), 10, 2 );

        add_action( 'admin_enqueue_scripts', array( $this, 'scripts' ) );
    }

    function add_action_links( $links, $file ) {
        if ( $file != plugin_basename( dirname( __FILE__ ) . '/instagram-widget-by-wpzoom.php' ) ) {
            return $links;
        }

        $settings_link = sprintf(
            '<a href="%1$s">%2$s</a>',
            menu_page_url( 'wpzoom-instagram-widget', false ),
            esc_html__( 'Settings', 'wpzoom-instagram-widget' )
        );

        array_unshift( $links, $settings_link );

        return $links;
    }

    public function add_admin_menu() {
        add_options_page(
            'Instagram Widget by WPZOOM',
            'Instagram Widget by WPZOOM',
            'manage_options',
            'wpzoom-instagram-widget',
            array( $this, 'settings_page' )
        );
    }

    public function settings_init() {
        $this->settings = get_option( 'wpzoom-instagram-widget-settings', self::$default_settings );

        register_setting(
            'wpzoom-instagram-widget-settings-group',
            'wpzoom-instagram-widget-settings',
            array( $this, 'sanitize' )
        );

        add_settings_section(
            'wpzoom-instagram-widget-settings-general',
            null,
            '__return_false',
            'wpzoom-instagram-widget-settings-group'
        );

        add_settings_field(
            'wpzoom-instagram-widget-access-token',
            __( 'Access Token', 'wpzoom-instagram-widget' ),
            array( $this, 'settings_field_access_token' ),
            'wpzoom-instagram-widget-settings-group',
            'wpzoom-instagram-widget-settings-general'
        );

        add_settings_field(
            'wpzoom-instagram-widget-enable-lightbox',
            __( 'Media Lightbox', 'wpzoom-instagram-widget' ),
            array( $this, 'settings_fields_enable_lightbox' ),
            'wpzoom-instagram-widget-settings-group',
            'wpzoom-instagram-widget-settings-general'
        );
    }

    public function settings_field_access_token() {
        ?>
            <input class="regular-text code" id="wpzoom-instagram-widget-settings_access-token" name="wpzoom-instagram-widget-settings[access-token]" value="<?php echo esc_attr( $this->settings['access-token'] ) ?>" type="text">
            <p class="description">
                <?php
                printf(
                    __(
                        'Access Token is used as key to access your photos from Instagram so they can be displayed. You can also get it manually from <a href="%1$s">there</a>.',
                        'wpzoom-instagram-widget'
                    ),
                    'http://www.wpzoom.com/instagram/'
                );
                ?>
            </p>
        <?php
    }

    public function settings_fields_enable_lightbox() {
        ?>
            <label for="wpzoom-instagram-widget-settings_enable-lightbox">
                <input id="wpzoom-instagram-widget-settings_enable-lightbox" name="wpzoom-instagram-widget-settings[enable-lightbox]" value="1" <?php checked( $this->settings['enable-lightbox'], 1 ); ?> type="checkbox">
                <?php _e( 'Enable Media Lightbox?', 'wpzoom-instagram-widget' ); ?>
            </label>
            <p class="description">
                <?php _e( 'Media Lightbox allows to display big Instagram photos directly on your website in a beautiful manner without redirecting users to Instagram.', 'wpzoom-instagram-widget' ); ?>
            </p>
        <?php
    }

    public function settings_page() {
        $oauth_url = 'https://instagram.com/oauth/authorize/?client_id=fd92b82737834e0595eae6476dc53f07&response_type=token&redirect_uri=http://www.wpzoom.com/instagram/';
        $oauth_url .= '?auth_site=' . esc_url( admin_url( 'options-general.php?page=wpzoom-instagram-widget' ) );
        ?>

            <div class="wrap zoom-instagram-widget">

                <h1><?php _e( 'Instagram Widget by WPZOOM', 'wpzoom-instagram-widget' ); ?></h1>

                <p><?php _e( 'Configure your Instagram Widget here. First auth, then design.', 'wpzoom-instagram-widget' ); ?></p>

                <p><?php printf( __( 'If you need more help, please check <a href="%1$s"">plugin documentation</a> or <a href="%2$s">open a support ticket</a>.' ), 'http://www.wpzoom.com/plugins/instagram-widget/', 'https://wordpress.org/support/plugin/instagram-widget-by-wpzoom' ); ?></p>

                <a class="button button-connect" href="<?php echo esc_url( $oauth_url ); ?>">
                    <?php if ( ! Wpzoom_Instagram_Widget_API::getInstance()->is_configured() ) : ?>
                        <span><?php _e( 'Connect with Instagram', 'wpzoom-instagram-widget' ); ?></span>
                    <?php else: ?>
                        <span class="zoom-instagarm-widget-connected"><?php _e( 'Re-connect with Instagram', 'wpzoom-instagram-widget' ); ?></span>
                    <?php endif; ?>
                </a>

                <form action="options.php" method="post">

                    <?php
                    settings_fields( 'wpzoom-instagram-widget-settings-group' );
                    do_settings_sections( 'wpzoom-instagram-widget-settings-group' );
                    submit_button();
                    ?>

                </form>

            </div>

        <?php
    }

    public function scripts( $hook ) {
        if ( $hook != 'settings_page_wpzoom-instagram-widget' ) {
            return;
        }

        wp_enqueue_style( 'zoom-instagram-widget-admin', plugin_dir_url( dirname( __FILE__ ) . '/instagram-widget-by-wpzoom.php' ) . 'css/admin-instagram-widget.css', array(), '20151012' );
        wp_enqueue_script( 'zoom-instagram-widget-admin', plugin_dir_url( dirname( __FILE__ ) . '/instagram-widget-by-wpzoom.php' ) . 'js/admin-instagram-widget.js', array( 'jquery' ), '20151012' );
        wp_localize_script( 'zoom-instagram-widget-admin', 'zoom_instagram_widget_admin', array(
            'i18n_connect_confirm' => __( "Instagram Widget is already connected to Instagram.\r\n\r\nDo you want to connect again?", 'wpzoom-instagram-widget' ),
        ) );
    }

    public function sanitize( $input ) {
        $result = array();

        $result['access-token'] = sanitize_text_field( $input['access-token'] );

        $validation_result = Wpzoom_Instagram_Widget_API::is_access_token_valid( $result['access-token'] );

        if ( $validation_result !== true ) {
            $access_token_error_message = __( 'Provided access token is has been rejected by Instagram Api. Please check your input data.', 'wpzoom-instagram-widget' );

            if ( is_wp_error( $validation_result ) ) {
                $access_token_error_message = $validation_result->get_error_message();
            }

            if ( $validation_result !== true ) {
                add_settings_error(
                    'wpzoom-instagram-widget-access-token',
                    esc_attr( 'wpzoom-instagram-widget-access-token-invalid' ),
                    $access_token_error_message,
                    'error'
                );
            }

            $result['access-token'] = '';
        }


        if ( isset( $input['enable-lightbox'] ) ) {
            $result['enable-lightbox'] = (bool) $input['enable-lightbox'];
        } else {
            $result['enable-lightbox'] = false;
        }

        Wpzoom_Instagram_Widget_API::reset_cache();

        return $result;
    }

    public static function get_setting( $setting ) {
        $settings = wp_parse_args( get_option( 'wpzoom-instagram-widget-settings', self::$default_settings ),  self::$default_settings );

        return isset( $settings[ $setting ] ) ? $settings[ $setting ] : false;
    }
}

new Wpzoom_Instagram_Widget_Settings();
