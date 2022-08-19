import {
  MdBookmarkBorder,
  MdPictureInPicture,
  MdHourglassEmpty,
  MdLabelImportantOutline,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FcNext, FcPrevious } from "react-icons/fc";


export default {
  bookmarkIcon: <MdBookmarkBorder />,
  hourClassIcon: <MdHourglassEmpty />,
  labelIcon: <MdLabelImportantOutline />,
  pictureIcon: <MdPictureInPicture />,
  avatarIconUp: <MdKeyboardArrowUp />,
  avatarIconDown: <MdKeyboardArrowDown />,
  tableDownIcon: <AiFillCaretDown />,
  tableUpIcon: <AiFillCaretUp />,
  nextIcon:  <FcNext />,
  previousIcon: <FcPrevious />
};
