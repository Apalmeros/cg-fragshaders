#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() 
{
	vec4 m[9];
	get_sample_grad(m, image, texcoord);

	vec4 sobel_h = m[2] + (2.0*m[5]) + m[8] - (m[0] + (2.0*m[3]) + m[6]);
  	vec4 sobel_v = m[0] + (2.0*m[1]) + m[2] - (m[6] + (2.0*m[7]) + m[8]);
	vec4 sobel_edge = sqrt((sobel_h * sobel_h) + (sobel_v * sobel_v));

	FragColor = vec4(1.0 + sobel_edge.rgb, 1.0);
}

void get_sample_grad(inout vec4 m[9], sampler2D image, vec2 texcoord)
{
	float w = 1.0 / width;
	float h = 1.0 / height;

	m[0] = texture(image, texcoord + vec2( -w, -h));
	m[1] = texture(image, texcoord + vec2(0.0, -h));
	m[2] = texture(image, texcoord + vec2(  w, -h));
	m[3] = texture(image, texcoord + vec2( -w, 0.0));
	m[4] = texture(image, texcoord);
	m[5] = texture(image, texcoord + vec2(  w, 0.0));
	m[6] = texture(image, texcoord + vec2( -w, h));
	m[7] = texture(image, texcoord + vec2(0.0, h));
	m[8] = texture(image, texcoord + vec2(  w, h));
}
