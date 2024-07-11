const ProjectButton = ({ title }) => {
    return (
        <button className="w-full md:w-56 p-3 text-white cursor-pointer rounded-lg border border-[rgb(26,209,163)] bg-transparent 
           hover:bg-[rgb(26,209,163)] hover:text-gray-900 transition duration-300 ease-in-out shadow-md"
            style={{ boxShadow: "0px 0px 10px 3px rgba(26, 209, 163, 0.75)" }}>
            {title}
        </button>
    );
};

export default ProjectButton