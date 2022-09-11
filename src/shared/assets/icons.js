import {
  MdBookmarkBorder,
  MdPictureInPicture,
  MdHourglassEmpty,
  MdLabelImportantOutline
} from 'react-icons/md';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

export const NextIcon = () => <FcNext />;

export const PreviousIcon = () => <FcPrevious />;

export const UpIcon = () => <AiFillCaretUp />;

export const DownIcon = () => <AiFillCaretDown />;

export const PictureIcon = () => <MdPictureInPicture />;

export const LabelIcon = () => <MdLabelImportantOutline />;

export const HourClassIcon = () => <MdHourglassEmpty />;

export const BookmarkIcon = () => <MdBookmarkBorder />;
