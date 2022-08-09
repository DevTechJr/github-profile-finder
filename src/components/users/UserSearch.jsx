import React from "react";

const UserSearch = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="e.g. Anirudh"
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className="btn btn-ghost btn-lg"> Clear</button>
      </div>
    </div>
  );
};

export default UserSearch;
