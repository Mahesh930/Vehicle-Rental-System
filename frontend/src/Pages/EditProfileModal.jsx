import React, { useState } from "react";

const EditProfileModal = ({
    isOpen,
    onClose,
    userProfile,
    onUpdateProfile,
}) => {
    const [profile, setProfile] = useState(userProfile);
    const [selectedImage, setSelectedImage] = useState(
        userProfile.profileImage
    );

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                setProfile({ ...profile, profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded mt-2"
                    />
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="mt-2"
                    />
                    <button
                        onClick={() => onUpdateProfile(profile)}
                        className="mt-4 p-2 bg-blue-500 text-white rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        )
    );
};

export default EditProfileModal;
