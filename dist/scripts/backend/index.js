!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}({13:function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}jQuery((function(t){var e=t();t.fn.imageMediaControl=function(){this.each((function(){var n=t(this),i={frame:function(){return this._frame||(this._frame=wp.media({title:n.data("title"),library:{type:n.data("type")},button:{text:n.data("button")},multiple:!1,selection:[]}),this._frame.on("open",this.updateFrame).state("library").on("select",this.select)),this._frame},select:function(){var t=n.find(".attachment-input").add(e.find("input#wpz-insta_account-photo")),i=this.get("selection"),a=i.pluck("id");t.val(""+a).trigger("change"),e.find("img.wpz-insta_profile-photo").attr("src",""+i.first().toJSON().sizes.thumbnail.url)},updateFrame:function(){},init:function(){var a=n.find(".file-wrapper"),s=n.find(".attachment-input, #wpz-insta_account-photo"),o=n.find(".add-media, #wpz-insta_edit-account-photo"),r=n.find(".remove-avatar, #wpz-insta_reset-account-photo");o.on("click",(function(n){n.preventDefault(),e=t(this).closest(".wpz-insta_account-photo-wrapper"),i.frame().open()})),r.on("click",(function(e){e.preventDefault(),t("#the-list input.wpz-insta_profile-photo-input").val("-1").trigger("change"),t("#the-list img.wpz-insta_profile-photo").attr("src",zoom_instagram_widget_admin.default_user_thumbnail)})),s.on("change",(function(e){e.preventDefault();var i=n.find(".attachment-input").val();i?(o.text(n.data("button-replace-text")),r.show(),wp.media.attachment(i).fetch().then((function(e){a.fadeOut(400,(function(){var n=e.url;_.findKey(e,"thumbnail")&&(n=e.sizes.thumbnail.url),t(this).html('<img width="150" height="150" src="'+n+'"/>').fadeIn(400)}))}))):(a.hide(),r.hide(),o.text(n.data("button-add-text")))})).trigger("change")}};i.frame().on("open",(function(){var t=n.find(".attachment-input, #wpz-insta_account-photo"),e=i.frame(),a=e.state().get("selection"),s=t.val(),o=wp.media.attachment(s);e.reset(),o.id&&a.add(o)})),i.init()}))},t(".zoom-instagram-user-avatar-media-uploader, .inline-edit-wpz-insta_user .wpz-insta_quick-edit-columns .wpz-insta_two-columns").imageMediaControl(),t(window).on("beforeunload",(function(e){t.isEmptyObject(s)||o||e.preventDefault()})),t("#the-list").on("click","#wpz-insta_reconnect",(function(e){e.preventDefault(),window.wpzInstaAuthenticateInstagram(t(this).attr("href"))})),t(".wpzoom-instagram-widget-settings-request-type-wrapper").find("input[type=radio]").on("change",(function(e){e.preventDefault();var n=t(this).val(),i=["with-access-token","with-basic-access-token","without-access-token"].filter((function(t){return t!==n})),a=t(this).closest(".form-table");a.find(".wpzoom-instagram-widget-"+n+"-group").show(),i.forEach((function(t){a.find(".wpzoom-instagram-widget-"+t+"-group").hide()}))})),t(".wpzoom-instagram-widget-settings-request-type-wrapper").find("input[type=radio]:checked").change(),setTimeout((function(){if("hash"in window.location&&""!=(""+window.location.hash).trim()){var e=t(".edit-php.post-type-wpz-insta_user #the-list").find((""+window.location.hash).trim());e.length>0&&e.find("button.editinline").trigger("click")}}),100),window.opener&&window.location.hash.length>1&&window.location.hash.includes("access_token")&&(window.opener.wpzInstaHandleReturnedToken(window.location),window.close()),t("#screen-meta #wpz-insta_account-photo-hide, #screen-meta #wpz-insta_account-bio-hide, #screen-meta #wpz-insta_account-token-hide, #screen-meta #wpz-insta_actions-hide").closest("label").remove(),t("#titlediv").remove(),t("#title").length>0&&(t("#title").attr("size",t("#title").val().trim().length+3),t("#title").on("input",(function(){t(this).attr("size",t(this).val().trim().length+3)}))),t(".wpz-insta_feed-edit-nav").length>0&&(window.location.hash&&r(window.location.hash),t(".wpz-insta_feed-edit-nav a").on("click",(function(){r(t(this).attr("href"))}))),t("#wpz-insta_show-pro").on("change",(function(e){e.preventDefault(),t(this).closest(".wpz-insta_sidebar").toggleClass("show-pro",this.checked)})),t(".wpz-insta-wrap .account-options .account-option-button").on("click",(function(e){e.preventDefault(),t(this).is(".disabled")||(t(this).is("#wpz-insta_connect-personal")||t(this).is("#wpz-insta_connect-business")?window.wpzInstaAuthenticateInstagram(t(this).attr("href")):t(this).is("#wpz-insta_account-token-button")&&window.wpzInstaHandleReturnedToken(t("#wpz-insta_account-token-input").val().trim().replace(/[^a-z0-9-_.]+/gi,""),!0))})),t("#wpz-insta_account-token-input").on("input",(function(){t("#wpz-insta_account-token-button").toggleClass("disabled",t("#wpz-insta_account-token-input").val().trim().length<=0)})),t('.wpz-insta_sidebar-section-layout input[name="_wpz-insta_layout"]').on("change",(function(){var e=t(this).closest(".wpz-insta_sidebar-section-layout").find('input[name="_wpz-insta_col-num"]').closest(".wpz-insta_table-row"),n=t(this).closest(".wpz-insta_sidebar-section-layout").find('input[name="_wpz-insta_perpage-num"]').closest(".wpz-insta_table-row"),i=t(this).closest(".wpz-insta_sidebar-section-layout").find(".wpz-insta_table-row-featured-layout"),a=i.closest(".wpz-insta_feed-only-pro"),s=t(this).closest(".wpz-insta_sidebar-left-section"),o=s.find(".wpz-insta_sidebar-section-feed .wpz-insta_show-on-hover fieldset.wpz-insta_feed-only-pro.wpz-insta_pro-only"),r=s.find(".wpz-insta_sidebar-section-load-more");e.add(o).add(r).toggleClass("hidden","1"==t(this).val()||"3"==t(this).val()),t(".wpz-insta-admin .wpz-insta_widget-preview .wpz-insta_widget-preview-view").toggleClass("layout-fullwidth","1"==t(this).val()),i.toggleClass("hidden","0"!=t(this).val()),t(".wpz-insta_sidebar .wpz-insta_sidebar-left").hasClass(".is-pro")||a.toggleClass("hidden","0"!=t(this).val()),n.toggleClass("hidden","3"!=t(this).val())})),t('.wpz-insta_sidebar-section-layout input[name="_wpz-insta_col-num"]').on("input",(function(){if("0"==t('.wpz-insta_sidebar-section-layout input[name="_wpz-insta_layout"]:checked').val()){var e=parseInt(t(this).closest(".wpz-insta_sidebar-section-layout").find('input[name="_wpz-insta_col-num"]').val()),n=t(this).closest(".wpz-insta_table").find("label.featured-layout"),i=n.closest(".wpz-insta_table-row");e<3||e>6?i.addClass("hidden"):(i.removeClass("hidden"),n.addClass("hidden"),n.each((function(){t(this).is(".featured-layout-columns_"+e)&&t(this).removeClass("hidden")})))}})),t('.wpz-insta_sidebar-section-layout input[name="_wpz-insta_col-num_responsive-enabled"]').on("change",(function(){t(this).closest(".wpz-insta_responsive-table-row").toggleClass("wpz-insta_responsive-enabled",t(this).is(":checked"))})),t("#_wpz-insta_featured-layout-enable").on("change",(function(){t(this).closest(".wpz-insta_table-row").find(".wpz-insta_image-select").toggleClass("hidden",!t(this).is(":checked"))})),t("#wpz-insta_modal-dialog").find(".wpz-insta_modal-dialog_ok-button, .wpz-insta_modal-dialog_close-button").on("click",(function(e){e.preventDefault();var n=t("#wpz-insta_modal-dialog");window.wpzInstaCloseConnectDoneDialog(n.hasClass("success"),n.hasClass("update"))})),t("#wpz-insta_feed-user-select-btn").on("click",(function(e){e.preventDefault(),t("#wpz-insta_tabs-config-cnnct").removeClass("active").addClass("active").prev(".wpz-insta_sidebar").removeClass("active"),t("#wpz-insta_tabs-config-cnnct").closest(".wpz-insta_tabs-content").find("> .wpz-insta_sidebar").addClass("hide")})),t("#wpz-insta_feed-user-remove-btn").on("click",(function(e){e.preventDefault();var n=t("#wpz-insta_feed-user-select-btn").closest(".wpz-insta_feed-user-select"),i=n.find(".wpz-insta_feed-user-select-info");t("#wpz-insta_user-id").val("-1").trigger("change"),t("#wpz-insta_user-token").val("-1").trigger("change"),t("#wpz-insta_user-token, #wpz-insta_check-new-posts-interval-number, #wpz-insta_enable-request-timeout").closest(".wpz-insta_sidebar-section").removeClass("active"),t("#wpz-insta_widget-preview-links").addClass("disabled"),n.removeClass("is-set"),i.find(".wpz-insta_feed-user-select-info-name").html("None"),i.find(".wpz-insta_feed-user-select-info-type").html("None"),n.closest(".wrap").find(".wpz-insta_settings-header .wpz-insta_feed-edit-nav li:not(:first-child)").addClass("disable")})),t("#wpz-insta_tabs-config-cnnct .wpz-insta_tabs-config-connect-accounts li").on("click",(function(e){e.preventDefault();var n=t("#wpz-insta_feed-user-select-btn").closest(".wpz-insta_feed-user-select"),i=n.find(".wpz-insta_feed-user-select-info");t("#wpz-insta_user-id").val(t(this).data("user-id")).trigger("change"),t("#wpz-insta_user-token").val(t(this).data("user-token")).trigger("change"),t("#wpz-insta_user-token, #wpz-insta_check-new-posts-interval-number, #wpz-insta_enable-request-timeout").closest(".wpz-insta_sidebar-section").addClass("active"),n.addClass("is-set"),i.find(".wpz-insta_feed-user-select-info-name").html(t(this).data("user-name")),i.find(".wpz-insta_feed-user-select-info-type").html(t(this).data("user-type")),n.closest(".wrap").find(".wpz-insta_settings-header .wpz-insta_feed-edit-nav li").removeClass("disable"),n.find(".wpz-insta_feed-user-select-edit-link").attr("href",zoom_instagram_widget_admin.edit_user_url+t(this).data("user-id")),t("#wpz-insta_widget-preview-links").removeClass("disabled"),t("#wpz-insta_tabs-config-cnnct").removeClass("active").prev(".wpz-insta_sidebar").addClass("active"),t("#wpz-insta_tabs-config-cnnct").closest(".wpz-insta_tabs-content").find("> .wpz-insta_sidebar").removeClass("hide")}));var n={},a={},s={},o=!1;function r(e){if(e){var n=t('.wpz-insta_feed-edit-nav a[href="'+e+'"]'),i=n.closest("form").find(".wpz-insta_tabs-content .wpz-insta_sidebar-left-section");n.closest(".wpz-insta_feed-edit-nav").find("li").removeClass("active"),n.closest("li").addClass("active"),i.removeClass("active"),i.filter('[data-id="'+e+'"]').addClass("active")}}function d(t){var e,n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];clearTimeout(e),e=setTimeout((function(){t.apply(n,s)}),i)}}if(t("form#post .wpz-insta_tabs-content > .wpz-insta_sidebar > .wpz-insta_sidebar-left").find("input, textarea, select").add("form#post #title").filter("[name][name!='']").not(".preview-exclude").each((function(e){t(this).is(":radio")?t(this).is(":checked")&&(n[t.trim(t(this).attr("name"))]=t(this)):n[t.trim(t(this).attr("name"))]=t(this)})),t.each(n,(function(e,n){a[e]=n.is(":checkbox")?n.is(":checked")?"1":"0":t.trim(""+n.val())})),t("form#post").on("submit",(function(){return o=!0})),t("form#post #title, form#post .wpz-insta_tabs-content > .wpz-insta_sidebar > .wpz-insta_sidebar-left").on("input change",d((function(e){var n=t(e.target);if(!n.is(".preview-exclude")){var i=n.attr("name"),o=n.is(":checkbox")?n.is(":checked")?"1":"0":t.trim(""+n.val());i in a&&o!=a[i]?i in s||(s[i]=!0):i in s&&delete s[i],t("input#publish").toggleClass("disabled",t.isEmptyObject(s)),window.wpzInstaReloadPreview()}}),300)),t((function(){window.wpzInstaReloadPreview()})),t("#wpz-insta_widget-preview-links .wpz-insta_widget-preview-header-link").on("click",(function(){t(this).hasClass("active")||(t(this).addClass("active").siblings(".wpz-insta_widget-preview-header-link").removeClass("active"),t(this).closest(".wpz-insta_widget-preview").find(".wpz-insta_widget-preview-view").removeClass("wpz-insta_widget-preview-size-desktop wpz-insta_widget-preview-size-tablet wpz-insta_widget-preview-size-mobile").addClass(t(this).hasClass("wpz-insta_widget-preview-header-links-tablet")?"wpz-insta_widget-preview-size-tablet":t(this).hasClass("wpz-insta_widget-preview-header-links-mobile")?"wpz-insta_widget-preview-size-mobile":"wpz-insta_widget-preview-size-desktop"))})),t("#wpz-insta_widget-preview-view").on("transitionend",(function(){var e=t(this).find("iframe");e.height(parseInt(e.contents().find("body").prop("scrollHeight"))+20)})),t("#wpz-insta_widget-preview-view iframe").on("load",(function(){t(this).removeClass("wpz-insta_preview-hidden"),t(this).closest(".wpz-insta_sidebar-right").addClass("hide-loading")})),t(".wpz-insta_color-picker").wpColorPicker({change:function(e,n){var i=t.Event("change");i.target=e.target,t(e.target).closest("form#post").find(".wpz-insta_tabs-content > .wpz-insta_sidebar > .wpz-insta_sidebar-left").triggerHandler(i)}}),t(".wpzinsta-pointer").each((function(){t(this).parent().addBack().one("click",(function(e){e.stopPropagation();var n=t(this);t(this).is("li")&&(n=t(this).find(".wpzinsta-pointer")),n.remove()}))})),t("#post-body-content .wpz-insta_sidebar .wpz-insta_sidebar-left .wpz-insta_sidebar-left-section").on("scroll",(function(){t(this).find(".wp-picker-holder").each((function(){var e=t(this).closest(".wp-picker-container"),n=e.offset();t(this).offset({top:n.top+e.outerHeight(),left:n.left})}))})).triggerHandler("scroll"),t(window).on("scroll",(function(){t("#post-body-content .wpz-insta_sidebar .wpz-insta_sidebar-left .wpz-insta_sidebar-left-section").each((function(){t(this).triggerHandler("scroll")}))})),t("#post-body-content .wpz-insta_sidebar .wpz-insta_sidebar-left .wpz-insta_sidebar-left-section .wpz-insta_color-picker").length>0&&new IntersectionObserver((function(t,e){return t.forEach((function(t){return t.target.blur()}))}),{root:null,threshold:.1}).observe(t("#post-body-content .wpz-insta_sidebar .wpz-insta_sidebar-left .wpz-insta_sidebar-left-section .wpz-insta_color-picker")[0]),t("#wpz-insta_shortcode").on("focus",(function(e){e.preventDefault(),t(this).select()})),t("#wpz-insta_shortcode-copy-btn").on("click",d((function(){window.wpzInstaCopyToClipboard(t("#wpz-insta_shortcode").val()).then((function(){t("#wpz-insta_shortcode-copy-btn").addClass("success"),clearTimeout(void 0),setTimeout((function(){t("#wpz-insta_shortcode-copy-btn").removeClass("success")}),3e3)}))}),300)),t(".wpz-insta_actions-menu_copy-shortcode").on("click",(function(e){e.preventDefault();var n=t(this).closest("tr").attr("id").replace("post-","");window.wpzInstaCopyToClipboard('[instagram feed="'+n+'"]').then((function(){window.wpzInstaShowDialog(zoom_instagram_widget_admin.i18n_shortcode_success_title,zoom_instagram_widget_admin.i18n_shortcode_success_content,"success update")}))})),t(".wpz-insta_actions-menu_delete").on("click",(function(e){e.preventDefault();var n=t(this).hasClass("wpz-insta_actions-menu_delete-feed"),i=t(this).find("a").attr("href");window.wpzInstaShowConfirmDialog(zoom_instagram_widget_admin["i18n_delete_"+(n?"feed":"user")+"_confirm_title"],zoom_instagram_widget_admin["i18n_delete_"+(n?"feed":"user")+"_confirm_content"],zoom_instagram_widget_admin.i18n_delete_confirm_button_ok,zoom_instagram_widget_admin.i18n_delete_confirm_button_cancel).then((function(t){!0===t&&(window.location=i),window.wpzInstaCloseDialog()}))})),window.wpzInstaAuthenticateInstagram=function(t,e){var n=(window.screen.height-500)/2,i=(window.screen.width-700)/2;window.open(t,"","width=700,height=500,left="+i+",top="+n)},window.wpzInstaParseQuery=function(t){for(var e={},n=("?"===t[0]||"#"===t[0]?t.substr(1):t).split("&"),i=0;i<n.length;i++){var a=n[i].split("=");e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]||"")}return e},window.wpzInstaShowConnectDoneDialog=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];window.wpzInstaShowDialog(t?e?zoom_instagram_widget_admin.i18n_reconnect_success_title:zoom_instagram_widget_admin.i18n_connect_success_title:zoom_instagram_widget_admin.i18n_connect_fail_title,t?e?zoom_instagram_widget_admin.i18n_reconnect_success_content:zoom_instagram_widget_admin.i18n_connect_success_content:zoom_instagram_widget_admin.i18n_connect_fail_content,(t?"success":"fail")+(e?" update":""))},window.wpzInstaShowDialog=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[DIALOG TITLE]",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[DIALOG CONTENT]",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success",a=t("#wpz-insta_modal-dialog"),s=a.find(".wpz-insta_modal-dialog_header-title"),o=a.find(".wpz-insta_modal-dialog_content"),r=(a.find(".wpz-insta_modal-dialog_footer .wpz-insta_modal-dialog_ok-button"),a.find(".wpz-insta_modal-dialog_footer .wpz-insta_modal-dialog_cancel-button"));s.html(""+e),o.html(""+n),r.addClass("hidden"),a.removeClass().addClass("open "+i)},window.wpzInstaShowConfirmDialog=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"[DIALOG TITLE]",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[DIALOG CONTENT]",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"[OK]",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"[CANCEL]";return new Promise((function(s,o){var r=t("#wpz-insta_modal-dialog"),d=r.find(".wpz-insta_modal-dialog_header-title"),l=r.find(".wpz-insta_modal-dialog_content"),c=r.find(".wpz-insta_modal-dialog_footer .wpz-insta_modal-dialog_ok-button"),p=r.find(".wpz-insta_modal-dialog_footer .wpz-insta_modal-dialog_cancel-button");d.html(""+e),l.html(""+n),c.removeClass("hidden").html(""+i),c.on("click",(function(){return s(!0)})),p.removeClass("hidden").html(""+a),p.on("click",(function(){return s(!1)})),r.removeClass().addClass("open confirm")}))},window.wpzInstaCloseConnectDoneDialog=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];window.wpzInstaCloseDialog(),t&&!e&&window.location.replace(zoom_instagram_widget_admin.feeds_url)},window.wpzInstaCloseDialog=function(){t("#wpz-insta_modal-dialog").removeClass("open")},window.wpzInstaCopyToClipboard=function(t){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(t);var e=document.createElement("textarea");return e.value=t,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select(),new Promise((function(t,n){document.execCommand("copy")?t():n(),e.remove()}))},"inlineEditPost"in window){t(".inline-edit-save").find(".button-primary").addClass("disabled");var l=window.inlineEditPost.edit;window.inlineEditPost.edit=function(e){l.call(this,e),"object"===i(e)&&(e=window.inlineEditPost.getId(e));for(var n,a,s=["_wpz-insta_account-type","_wpz-insta_token","_wpz-insta_token_expire","_thumbnail_id","wpz-insta_profile-photo","_wpz-insta_user_name","_wpz-insta_user-bio"],o=t("#inline_"+e),r=t("#edit-"+e),d=0;d<s.length;d++)n=(n=t("."+(a=s[d]),o)).text(),"wpz-insta_profile-photo"==a?t("img."+a).attr("src",n):"_wpz-insta_token"==a?t("#wpz-insta_token",r).val(n):t(':input[name="'+a+'"]',r).val(n),t(':input[name="'+a+'"]',r).on("change paste keyup",(function(){t(".inline-edit-save",r).find(".button-primary").removeClass("disabled")}));t("#wpz-insta_reconnect",r).attr("data-user-id",e)}}window.wpzInstaHandleReturnedToken=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var i=!n&&"hash"in e&&""!=(""+e.hash).trim()?window.wpzInstaParseQuery(""+e.hash):{};if(!n&&!t.isEmptyObject(i)||n&&""!=(""+e).trim()){var a=n?(""+e).trim():"access_token"in i?(""+i.access_token).trim():"-1";if(""!=a&&"-1"!=a){var s={action:"wpz-insta_connect-user",nonce:zoom_instagram_widget_admin.nonce,token:a};if(!n){var o="search"in e&&""!=(""+e.search).trim()?window.wpzInstaParseQuery(""+e.search):{};s.post_id=!t.isEmptyObject(o)&&"post"in o?parseInt(o.post):0}t.post(ajaxurl,s).done((function(e){t(".inline-edit-wpz-insta_user #wpz-insta_token").val(a),t(".inline-edit-save").find(".button-primary").removeClass("disabled");var n=new Date;n.setDate(n.getDate()+60),t("#the-list #wpz-insta_token-expire-time").html(n.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"})),window.wpzInstaShowConnectDoneDialog(e.success,"data"in e&&"update"in e.data&&e.data.update)})).fail((function(){window.wpzInstaShowConnectDoneDialog(!1)}))}}}},window.wpzInstaReloadPreview=function(){var e=zoom_instagram_widget_admin.preview_url,n=t.param(t("form#post #title, form#post .wpz-insta_tabs-content > .wpz-insta_sidebar > .wpz-insta_sidebar-left").find("input, textarea, select").not(".preview-exclude").serializeArray());n&&(e+="&"+n),t("#wpz-insta_widget-preview-view").closest(".wpz-insta_sidebar-right").removeClass("hide-loading"),t("#wpz-insta_widget-preview-view iframe").addClass("wpz-insta_preview-hidden").attr("src",e)},window.wpzInstaUpdatePreviewHeight=function(){var e=t("#wpz-insta_widget-preview-view iframe");e.height(parseInt(e.contents().find("body").prop("scrollHeight")))}}))}});