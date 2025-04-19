
const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin === 1) {
        next();
    } else {
        const b=false;
        res.json({b});
    }
};

export default isAdmin;
