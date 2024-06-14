import { FaUser, FaUserSlash } from "react-icons/fa";
import Container from "../../../Container";
import UseUser from "../../../Hooks/UseUser";
import { AiFillMediumCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteUser } from "../../../Api/user";
import axiosSecure from "../../../Api";
import { toast } from "react-hot-toast";

const ManageUser = () => {
  const [users, refetch] = UseUser();
  //   console.log(users);

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
                        // onClick={() => handleMakeAdmin(item)}
                        className="px-4 py-3 rounded-lg bg-cyan-500"
                      >
                        <FaUser className="text-white text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    {item.role === "moderator" ? (
                      <>
                        <button className="px-4 py-3 rounded-lg bg-white">
                          <AiFillMediumCircle className="text-orange-500 text-xl" />
                        </button>
                      </>
                    ) : (
                      <button
                        // onClick={() => handleMakeModerator(item)}
                        className="px-4 py-3 rounded-lg bg-cyan-500"
                      >
                        <FaUser className="text-white text-xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      // onClick={() => handleMakeModerator(item)}
                      className="px-4 py-3 rounded-lg bg-cyan-500"
                    >
                      <FaUser className="text-white text-xl" />
                    </button>
                  </td>
                  <td>
                    <button

                    // onClick={() => handleDeleteUser(item._id)}
                    >
                      <span className="text-2xl text-red-600 hover:text-orange-500">
                        <FaUserSlash />
                      </span>
                    </button>
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
