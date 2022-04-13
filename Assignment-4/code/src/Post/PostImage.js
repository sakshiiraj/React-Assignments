const PostImage = ({ config }) => {
  const relativeImageURL = `../assets/${config.PostImage}`;
  return (
    <div className="PostImageWrapper">
      <img src={relativeImageURL} alt={config.description} />
    </div>
  );
};
export default PostImage;
