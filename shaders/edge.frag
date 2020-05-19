#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

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

