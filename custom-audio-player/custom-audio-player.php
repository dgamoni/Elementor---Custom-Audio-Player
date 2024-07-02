<?php
/*
Plugin Name: Custom Audio Player
Description: A custom audio player block for Elementor with autoplay and smooth fading when a video starts.
Version: 1.0
Author: Andrii Monin
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Enqueue scripts and styles
function custom_audio_player_scripts() {
    wp_enqueue_script('howler-js', plugin_dir_url(__FILE__) . 'js/howler.core.min.js', array(),'2.2.4', true);
    wp_enqueue_script('custom-audio-player-js', plugin_dir_url(__FILE__) . 'js/custom-audio-player.js', array('jquery','howler-js'), rand(), true);
    wp_enqueue_style('custom-audio-player-css', plugin_dir_url(__FILE__) . 'css/custom-audio-player.css', array(), rand() );

    wp_localize_script('custom-audio-player-js', 'customAudioPlayer', array(
        'pluginUrl' => plugin_dir_url(__FILE__),
    ));

}
add_action('wp_enqueue_scripts', 'custom_audio_player_scripts');

// Register Custom Audio Player Widget
function register_custom_audio_player_widget( $widgets_manager ) {

    require_once( __DIR__ . '/widgets/custom-audio-player-widget.php' );

    $widgets_manager->register( new \Elementor_Custom_Audio_Player_Widget() );

}
add_action( 'elementor/widgets/register', 'register_custom_audio_player_widget' );
