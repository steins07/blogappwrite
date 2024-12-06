import PropTypes from "prop-types";
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4  w-800">
          <div className="w-full flex items-center justify-center  mb-4">
            <img
              src={appwriteService.getFilePreview(featuredImage)} // Pass the fileId directly here
              alt={title}
              className="rounded-xl "
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </Link>
    );
}

export default PostCard;

PostCard.propTypes = {
    $id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired,
}
