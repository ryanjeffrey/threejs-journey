uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

void main()
{
    // gl_FragColor = vec4(uDepthColor, 1.0);
    gl_FragColor = vec4(uSurfaceColor, 1.0);
}