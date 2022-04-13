import InstagramIcon from "@mui/icons-material/Instagram";
const Header = () => {
  return (
    <nav className="Header">
      <div className="HeaderTitleWrapper">
        <div className="HeadTitle">Instaclone</div>
        <div className="HeadInstaLogo">
          <InstagramIcon />
        </div>
      </div>
    </nav>
  );
};
export default Header;
