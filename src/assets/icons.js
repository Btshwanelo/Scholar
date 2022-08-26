import {
  MdBookmarkBorder,
  MdPictureInPicture,
  MdHourglassEmpty,
  MdLabelImportantOutline,
} from "react-icons/md";
import { FcNext, FcPrevious } from "react-icons/fc";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

//TODO: i came up with this component for my icons, im not sure this is professional enough
const NextIcon = () => {
  return (
    <>
      <FcNext />
    </>
  );
};

const PreviousIcon = () => {
  return (
    <>
      <FcPrevious />
    </>
  );
};

const UpIcon = () => {
  return (
    <>
      <AiFillCaretUp />
    </>
  );
};

const DownIcon = () => {
  return (
    <>
      <AiFillCaretDown />
    </>
  );
};

const PictureIcon = () => {
  return (
    <>
      <MdPictureInPicture />
    </>
  );
};

const LabelIcon = () => {
  return (
    <>
      <MdLabelImportantOutline />
    </>
  );
};

const HourClassIcon = () => {
  return (
    <>
      <MdHourglassEmpty />
    </>
  );
};

const BookmarkIcon = () => {
  return (
    <>
      <MdBookmarkBorder />
    </>
  );
};

export {
  PreviousIcon,
  NextIcon,
  UpIcon,
  DownIcon,
  PictureIcon,
  LabelIcon,
  HourClassIcon,
  BookmarkIcon,
};
