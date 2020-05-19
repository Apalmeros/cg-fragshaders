#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main(){
	vec2 uv;
	vec2 xy = 2.0 * texcoord - 1.0;

	float theta = atan(xy.y, xy.x);
	float radius = pow(length(xy), 1.5);

	uv.x = radius * cos(theta);
	uv.y = radius * sin(theta);

	vec4 c = texture(image, uv);
	FragColor = c;
}
