#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

/*
void main() {
	vec3 diffuse = texture(image, texcoord).rgb;
	mat3 I;
	for (int i=0; i<3; i++)
	{
		for (int j=0; j<3; j++)
		{
			vec3 sam = texelFetch(image, ivec2(texcoord) + ivec2(i-1,j-1), 0).rgb;
			I[i][j] = length(sam);
		}
	}

	float g = sqrt(pow(width, 2.0)+pow(height, 2.0));
    FragColor = vec4(diffuse - vec3(g), 1.0);
}
*/

void make_kernel(inout vec4 n[9], sampler2D tex, vec2 coord)
{
	float w = 1.0 / width;
	float h = 1.0 / height;

	n[0] = texture(tex, coord + vec2( -w, -h));
	n[1] = texture(tex, coord + vec2(0.0, -h));
	n[2] = texture(tex, coord + vec2(  w, -h));
	n[3] = texture(tex, coord + vec2( -w, 0.0));
	n[4] = texture(tex, coord);
	n[5] = texture(tex, coord + vec2(  w, 0.0));
	n[6] = texture(tex, coord + vec2( -w, h));
	n[7] = texture(tex, coord + vec2(0.0, h));
	n[8] = texture(tex, coord + vec2(  w, h));
}

void main() 
{
	vec4 n[9];
	make_kernel( n, image, texcoord);

	vec4 sobel_edge_h = n[2] + (2.0*n[5]) + n[8] - (n[0] + (2.0*n[3]) + n[6]);
  	vec4 sobel_edge_v = n[0] + (2.0*n[1]) + n[2] - (n[6] + (2.0*n[7]) + n[8]);
	vec4 sobel = sqrt((sobel_edge_h * sobel_edge_h) + (sobel_edge_v * sobel_edge_v));

	FragColor = vec4(1.0 - sobel.rgb, 1.0);
}
