#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

/*
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
*/

void main(){
	
	/*
	
	vec2 uv;
	vec2 xy = 2.0 * texcoord - 1.0;

	float theta = atan(xy.y, xy.x);
	float radius = pow(length(xy), 1.5);

	uv.x = radius * cos(theta);
	uv.y = radius * sin(theta);

	vec4 c = texture(image, uv);
	FragColor = c;
	*/

	vec2 uv;
	vec2 xy = 2.0 * texcoord - 1.0;

	float radius = distance(texcoord, vec2(.5));
	vec2 offset = texcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

	vec2 finaltex = texcoord + offset;
	vec4 Fcolor = texture(image, finaltex);
	FragColor = Fcolor;
}
