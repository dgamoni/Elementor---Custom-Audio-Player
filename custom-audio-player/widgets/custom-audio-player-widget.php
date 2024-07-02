<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class Elementor_Custom_Audio_Player_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'custom_audio_player';
    }

    public function get_title() {
        return __( 'Custom Audio Player', 'text-domain' );
    }

    public function get_icon() {
        return 'eicon-play';
    }

    public function get_categories() {
        return [ 'general' ];
    }

    protected function _register_controls() {

        $this->start_controls_section(
            'content_section',
            [
                'label' => __( 'Content', 'text-domain' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'audio_url',
            [
                'label' => __( 'Audio File URL', 'text-domain' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'input_type' => 'url',
                'placeholder' => __( 'https://your-audio-file.mp3', 'text-domain' ),
            ]
        );

        $this->end_controls_section();

    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <div class="custom-audio-player">
            <div class="player-controls">
                <button class="play-button" aria-label="Play"><img src="<?php echo plugin_dir_url(__FILE__) . '../img/player-off.svg'; ?>" alt="Play"></button>
            </div>
            <div class="audio-url" data-url="<?php echo esc_url( $settings['audio_url'] ); ?>"></div>
        </div>
        <?php
    }



}
