/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const vertexShader = `#version 300 es

    in vec2 i_position;
    uniform float u_translate_theta;
    uniform float u_scale;
    uniform float u_spin_theta;
    uniform float u_translation_comp;

    void main() {
        float spinAngles = radians(u_spin_theta);
        float spinC = cos(spinAngles);
        float spinS = sin(spinAngles);
        float translateAngle = radians(u_translate_theta);
        float translateC = cos(translateAngle);
        float translateS = sin(translateAngle);
        mat4 t = mat4(1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        u_translation_comp * translateC, u_translation_comp * translateS, 0.0, 1.0);
        mat4 rz = mat4(spinC, spinS, 0.0, 0.0,
                        -spinS, spinC, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        0.0, 0.0, 0.0, 1.0);
        mat4 s = mat4(u_scale, 0.0, 0.0, 0.0,
                            0.0, u_scale, 0.0, 0.0,
                            0.0, 0.0, u_scale, 0.0,
                            0.0, 0.0, 0.0, 1.0);

        gl_Position = t * rz * s * vec4(i_position, 0.0, 1.0);
    }
`;

const triangleFragmentShader = `#version 300 es

    precision mediump float;
    out vec4 o_color;
    
    void main() {
        o_color = vec4(126.0 / 255.0, 126.0 / 255.0, 126.0 / 255.0, 1.0);
    }
`;

const circleFragmentShader = `#version 300 es

    precision mediump float;
    out vec4 o_color;

    void main() {
        o_color = vec4(250.0 / 255.0, 237.0 / 255.0, 51.0 / 255.0, 1.0);
    }
`;