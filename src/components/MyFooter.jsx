
const MyFooter = function () {
    return (
       <footer className="d-flex bg-dark mt-2 fixed-bottom">
        <span className="text-light m-auto p-2">
        <strong> EPICODE-EpiBooks </strong> Copyright {new Date().getFullYear()}
        </span>
       </footer>
    );
};

export default MyFooter;