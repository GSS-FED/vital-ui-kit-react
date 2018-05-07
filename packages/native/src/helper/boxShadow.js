export default function(x, y, radius, color, opacity) {
  return `
    shadow-opacity: ${opacity};
    shadow-color: ${color};
    shadow-offset: ${x}px ${y}px;
    shadow-radius: ${radius}px;
  `;
}
