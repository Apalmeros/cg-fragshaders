#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
	
	float t = clamp(time / 6.0, 0., 1.);

	vec2 coords = texcoord;
	vec2 dir = coords - vec2(.5);

	float dist = distance(coords, vec2(.5));

	vec2 offset = dir * (sin(dist * 80. - time * 15.) + .5) / 30.;

	vec2 texCoord = coords + offset;
	vec4 diffuse = texture(image, texCoord);

 	FragColor = diffuse * t * (1. - t);
}
