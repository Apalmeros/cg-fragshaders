#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main(){
	
	
	vec2 xy = 2.0 * texcoord - 1.0;

	float radius = distance(texcoord, vec2(.5));
	vec2 offset = texcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

	vec2 finaltex = texcoord + offset;
	vec4 Fcolor = texture(image, finaltex);
	FragColor = Fcolor;
}
