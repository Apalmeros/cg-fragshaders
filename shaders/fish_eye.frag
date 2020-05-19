#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

const float PI = 3.1415926535;

void main() {
  vec2 uv;
  vec2 xy = 2.0 * texcoord - 1.0;
  float d = length(xy);
    float z = sqrt(1.0 - d * d);
    float r = atan(d, z);
    float phi = atan(xy.y, xy.x);

    uv.x = r * cos(phi) + 0.5;
    uv.y = r * sin(phi) + 0.5;
    vec4 c = texture(image, texcoord);
  	FragColor = c;
}
