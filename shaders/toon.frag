#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
	vec4 Color = texture(image, texcoord);
	//float R = (round(Color.r * 4.0)) / 4.0;
	//float G = (round(Color.g * 4.0)) / 4.0;
	//float B = (round(Color.b * 4.0)) / 4.0;

	//FragColor = vec4(R, G, B, Color.a);
	vec3 con = vec3((round(Color.r * 4.0)) / 4.0, (round(Color.g * 4.0)) / 4.0, (round(Color.b * 4.0)) / 4.0);

	FragColor = vec4(vec3(dot(Color.rgb, con)), Color.a);

	//FragColor = vec4(((round(Color.r * 4.0))/4.0),((round(Color.g * 4.0))/4.0), ((round(Color.b * 4.0))/4.0), 1.0);
}
