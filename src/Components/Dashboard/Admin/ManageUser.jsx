import { FaUser, FaUserSlash } from "react-icons/fa";
import Container from "../../../Container";
import UseUser from "../../../Hooks/UseUser";
import { AiFillMediumCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { FaDeleteLeft, FaSquareArrowUpRight } from "react-icons/fa6";
import { deleteUser } from "../../../Api/user";
import axiosSecure from "../../../Api";
import { toast } from "react-hot-toast";

const ManageUser = () => {
  const [users, refetch] = UseUser();
  //   console.log(users);

  // ===========================Make Admin & Moderator ======================================
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${user.name} Is Now Admin`);
        refetch();
      }
    });
  };

  const handleMakeCreator = (user) => {
    axiosSecure.patch(`/users/creator/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${user.name} Is Now A Creator`);
        refetch();
      }
    });
  };
  const handleMakeUser = (user) => {
    axiosSecure.patch(`/users/user/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${user.name} Is Now A Creator`);
        refetch();
      }
    });
  };
  const handleMakeBlock = (user) => {
    axiosSecure.patch(`/users/block/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${user.name} Is Now Blocked`);
        refetch();
      }
    });
  };
  const handleMakeUnblock = (user) => {
    axiosSecure.patch(`/users/unblock/${user._id}`).then((res) => {
      // console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast(`${user.name} Is Now Unblocked`);
        refetch();
      }
    });
  };
  //  delete users
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id).then((res) => {
          console.log(res);
          if (res.deletedCount > 0) {
            // console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="">
      <h1 className="mb-24 text-white">manage user</h1>

      <Container>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="text-black">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Creator</th>
                <th>Make User</th>
                <th>Block</th>
                <th>Unblock</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item?.email}</td>
                  <td>
                    {item.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className="px-4 py-3 rounded-lg bg-cyan-500"
                      >
                        <FaUser className="text-white text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    {item.role === "creator" ? (
                      <>
                        <button className="px-4 py-3 rounded-lg bg-white">
                          <AiFillMediumCircle className="text-green-500 text-xl" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleMakeCreator(item)}
                        className="px-4 py-3 rounded-lg bg-cyan-500"
                      >
                        <FaUser className="text-white text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    {item.role === "user" ? (
                      <>
                        <button className="px-4 py-3 rounded-lg bg-white">
                          <FaSquareArrowUpRight className="text-green-500 text-xl" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleMakeUser(item)}
                        className="px-4 py-3 rounded-lg bg-cyan-500"
                      >
                        <FaUser className="text-white text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    {item?.role === "block" ? (
                      <div className="">
                        <span className="text-2xl text-red-600 hover:text-orange-500">
                          <FaUserSlash />
                        </span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleMakeBlock(item)}
                        className="px-4 py-3 rounded-lg bg-cyan-500"
                      >
                        <FaUser className="text-white text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    {item?.role === "block" ? (
                      <button
                        onClick={() => handleMakeUnblock(item)}
                        className="border-2 px-2 py-1 bg-cyan-300 rounded-lg font-bold"
                      >
                        Unblock
                      </button>
                    ) : (
                      <div className="">
                        <span className="text-2xl text-green-600 hover:text-orange-500">
                          <FaUser />
                        </span>
                      </div>
                    )}
                  </td>

                  <td>
                    <button onClick={() => handleDeleteUser(item._id)}>
                      <span className="text-2xl text-red-600 hover:text-orange-500">
                        <FaDeleteLeft />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ManageUser;
