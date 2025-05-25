export default function PlaceholderImage({ category, title }) {
  // Generate a consistent color based on the category
  const getColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 80%)`;
  };

  const bgColor = getColor(category);
  const textColor = '#ffffff';

  return (
    <div className="w-full h-full">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <rect width="100%" height="100%" fill={bgColor} />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={textColor}
          fontSize="24"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
        >
          {category}
        </text>
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={textColor}
          fontSize="16"
          fontFamily="system-ui, -apple-system, sans-serif"
          opacity="0.8"
        >
          {title}
        </text>
      </svg>
    </div>
  );
} 