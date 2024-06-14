import Container from "../../../../Container";
import UseToGetContestCreatedByEmail from "../../../../Hooks/UseToGetContestCreatedByEmail";

const MyCreatedContest = () => {
  const [contests, refetch] = UseToGetContestCreatedByEmail();
  //   console.log(contests);
  return (
    <div>
      <h1 className="mb-24 text-white">Add Contest</h1>
      <Container>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Contest Name</th>
                <th>Img</th>
                <th>Status</th>
                <th>Submission</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default MyCreatedContest;
