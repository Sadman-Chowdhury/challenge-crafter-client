import { useNavigate } from "react-router-dom";
import Container from "../../../Container";
import UseAuth from "../../../Hooks/UseAuth";
import { useState } from "react";
import { imageUpload } from "../../../Api/utils";
import toast from "react-hot-toast";
import ProfileModal from "./ProfileModal";

const MyProfile = () => {
  const { user, updateUserProfile } = UseAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpdateUserProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const address = form.address.value;

    try {
      const imageData = await imageUpload(image);
      await updateUserProfile(name, imageData?.data?.display_url, address);
      setLoading(false);
      setIsOpen(false);
      toast.success("Updated profile Successfully");
    } catch (error) {
      console.log(error.message);
      toast.error(error?.message);
    }
  };

  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              alt="profile"
              src={user.photoURL}
              className="rounded-full h-24 w-24 border-4 border-gray-200 shadow-lg"
            />
            <p className="mt-4 text-2xl font-semibold text-gray-800">
              {user.displayName}
            </p>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-700">
              <span className="font-medium">User ID:</span> {user.uid}
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={openModal}
              className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition duration-200"
            >
              Update Profile
            </button>
          </div>

          <ProfileModal
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
            handleUpdateUserProfile={handleUpdateUserProfile}
            loading={loading}
          />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
