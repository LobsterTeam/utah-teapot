/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const vertexShader = `#version 300 es

    in vec3 i_position;
    uniform float u_rotate_theta;
    uniform mat4 u_model_view;
    uniform mat4 u_projection;

    void main() {
        float rotate_radian = radians(u_rotate_theta);
        float rotate_sin = sin(rotate_radian);
        float rotate_cos = cos(rotate_radian);
        mat4 ry = mat4(rotate_cos, 0.0, -rotate_sin, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        rotate_sin, 0.0, rotate_cos, 0.0,
                        0.0, 0.0, 0.0, 1.0);
        gl_Position = u_projection * u_model_view * ry * vec4(i_position, 1.0);
    }
`;

const teapotFragmentShader = `#version 300 es

    precision mediump float;
    out vec4 o_color;
    
    void main() {
        o_color = vec4(170.0 / 255.0, 178.0 / 255.0, 167.0 / 255.0, 1.0);
    }
`;

const planeFragmentShader = `#version 300 es

    precision mediump float;
    out vec4 o_color;
    
    void main() {
        o_color = vec4(0.0 / 255.0, 255.0 / 255.0, 0.0 / 255.0, 1.0);
    }
`;