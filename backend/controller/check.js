export const check = (req, res) => {
    const isAdmin = req.user.isAdmin;
    res.json({ isAdmin });
};