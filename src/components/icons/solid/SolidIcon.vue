<template>
  <component :is="checkIconComponent(iconName)" :width="size" :height="size" viewBox="0 0 24 24" />
</template>
<script>
import LightingIcon from './svg-icons/LightingIcon'
import MoonIcon from './svg-icons/MoonIcon'
import AdjustmentIcon from './svg-icons/AdjustmentIcon'
import AnalyticsIcon from './svg-icons/AnalyticIcon'
import ArrowBoxDownIcon from './svg-icons/ArrowBoxDownIcon'
import ArrowBoxUpIcon from './svg-icons/ArrowBoxUpIcon.vue'
import ArrowBoxLeftIcon from './svg-icons/ArrowBoxLeftIcon'
import ArrowBoxRightIcon from './svg-icons/ArrowBoxRightIcon'
import ArrowCircleDownIcon from './svg-icons/ArrowCircleDownIcon'
import ArrowCircleLeftIcon from './svg-icons/ArrowCircleLeftIcon'
import ArrowCircleRightIcon from './svg-icons/ArrowCircleRightIcon'
import ArrowCircleUpIcon from './svg-icons/ArrowCircleUpIcon'
import ArrowDownIcon from './svg-icons/ArrowDownIcon'
import ArrowHorizontalIcon from './svg-icons/ArrowHorizontalIcon'
import ArrowLeftIcon from './svg-icons/ArrowLeftIcon'
import ArrowPlusIcon from './svg-icons/ArrowPlusIcon'
import ArrowRightIcon from './svg-icons/ArrowRightIcon'
import ArrowUpIcon from './svg-icons/ArrowUpIcon'
import ArrowVerticalIcon from './svg-icons/ArrowVerticalIcon'
import BadgeIcon from './svg-icons/BadgeIcon'
import BagIcon from './svg-icons/BagIcon'
import BellIcon from './svg-icons/BellIcon'
import BookmarkIcon from './svg-icons/BookmarkIcon'
import BriefCaseIcon from './svg-icons/BriefCaseIcon'
import CalendarIcon from './svg-icons/CalendarIcon'
import CallIcon from './svg-icons/CallIcon'
import CallOffIcon from './svg-icons/CallOffIcon'
import CallRingingIcon from './svg-icons/CallRingingIcon'
import CameraIcon from './svg-icons/CameraIcon'
import CartIcon from './svg-icons/CartIcon'
import ChartPieIcon from './svg-icons/ChartPieIcon'
import ChartSquareBarIcon from './svg-icons/ChartSquareBarIcon'
import ChatIcon from './svg-icons/ChatIcon'
import ChevronArrowDownIcon from './svg-icons/ChevronArrowDownIcon'
import ChevronArrowLeftIcon from './svg-icons/ChevronArrowLeftIcon'
import ChevronArrowRightIcon from './svg-icons/ChevronArrowRightIcon'
import ChevronArrowUpIcon from './svg-icons/ChevronArrowUpIcon'
import ChevronDownIcon from './svg-icons/ChevronDownIcon'
import ChevronLeftIcon from './svg-icons/ChevronLeftIcon'
import ChevronRightIcon from './svg-icons/ChevronRightIcon'
import ChevronUpIcon from './svg-icons/ChevronUpIcon'
import CircleDirectionIcon from './svg-icons/CircleDirectionIcon'
import CircleIcon from './svg-icons/CircleIcon'
import ClockCircleIcon from './svg-icons/ClockCircleIcon'
import ClockSquareIcon from './svg-icons/ClockSquareIcon'
import ControllerIcon from './svg-icons/ControllerIcon'
import CropIcon from './svg-icons/CropIcon'
import DocumentArrowDownIcon from './svg-icons/DocumentArrowDownIcon'
import DocumentArrowUpIcon from './svg-icons/DocumentArrowUpIcon'
import DocumentIcon from './svg-icons/DocumentIcon'
import DocumentMinusIcon from './svg-icons/DocumentMinusIcon'
import DocumentPlusIcon from './svg-icons/DocumentPlusIcon'
import DocumentXIcon from './svg-icons/DocumentXIcon'
import DocumentCodeIcon from './svg-icons/DocumentCodeIcon'
import DotsCircleHorizontalIcon from './svg-icons/DotsCircleHorizontalIcon'
import DotsSquareHorizontalIcon from './svg-icons/DotsSquareHorizontalIcon'
import ExclamationCircleIcon from './svg-icons/ExclamationCircleIcon'
import ExclamationTriangleIcon from './svg-icons/ExclamationTriangleIcon'
import EyeFishIcon from './svg-icons/EyeFishIcon'
import EyeIcon from './svg-icons/EyeIcon'
import EyeOffIcon from './svg-icons/EyeOffIcon'
import FileIcon from './svg-icons/FileIcon'
import FileInvoiceIcon from './svg-icons/FileInvoiceIcon'
import FilterIcon from './svg-icons/FilterIcon'
import FolderIcon from './svg-icons/FolderIcon'
import HeartIcon from './svg-icons/HeartIcon'
import HomeIcon from './svg-icons/HomeIcon'
import IIcon from './svg-icons/IIcon.vue'
import KeySquareIcon from './svg-icons/KeySquareIcon'
import LocationArrowIcon from './svg-icons/LocationArrowIcon'
import LocationIcon from './svg-icons/LocationIcon'
import LockClosedIcon from './svg-icons/LockClosedIcon'
import LockOpenIcon from './svg-icons/LockOpenIcon'
import MessageIcon from './svg-icons/MessageIcon'
import MicrophoneIcon from './svg-icons/MicrophoneIcon'
import MicrophoneOnIcon from './svg-icons/MicrophoneOnIcon'
import MissedCallIcon from './svg-icons/MissedCallIcon'
import PencilAltIcon from './svg-icons/PencilAltIcon'
import PencilIcon from './svg-icons/PencilIcon'
import PhotoGalleryIcon from './svg-icons/PhotoGalleryIcon'
import PhotographIcon from './svg-icons/PhotographIcon'
import RefreshIcon from './svg-icons/RefreshIcon'
import RefreshLeftIcon from './svg-icons/RefreshLeftIcon'
import RefreshRightIcon from './svg-icons/RefreshRightIcon'
import SaveIcon from './svg-icons/SaveIcon'
import SaveUpIcon from './svg-icons/SaveUpIcon'
import ScannerIcon from './svg-icons/ScannerIcon'
import SearchIcon from './svg-icons/SearchIcon'
import SearchMinusIcon from './svg-icons/SearchMinusIcon'
import SearchPlusIcon from './svg-icons/SearchPlusIcon'
import SettingIcon from './svg-icons/SettingIcon'
import ShieldCheckIcon from './svg-icons/ShieldCheckIcon'
import ShieldXIcon from './svg-icons/ShieldXIcon'
import SquareIIcon from './svg-icons/SquareIIcon'
import SquarePlusIcon from './svg-icons/SquarePlusIcon'
import SquareTickIcon from './svg-icons/SquareTickIcon'
import SquareXIcon from './svg-icons/SquareXIcon'
import StarIcon from './svg-icons/StarIcon'
import StartIcon from './svg-icons/StartIcon'
import SwitchVerticalIcon from './svg-icons/SwitchVerticalIcon'
import TicketIcon from './svg-icons/TicketIcon'
import TimerIcon from './svg-icons/TimerIcon'
import TrashIcon from './svg-icons/TrashIcon'
import TableIcon from './svg-icons/TableIcon'
import UserAddIcon from './svg-icons/UserAddIcon'
import UserGroupIcon from './svg-icons/UserGroupIcon'
import UserIcon from './svg-icons/UserIcon'
import UsersIcon from './svg-icons/UsersIcon'
import VideoIcon from './svg-icons/VideoIcon'
import ViewGridIcon from './svg-icons/ViewGridIcon'
import VolumeIcon from './svg-icons/VolumeIcon'
import VolumeOffIcon from './svg-icons/VolumeOffIcon'
import VolumeOnIcon from './svg-icons/VolumeOnIcon'
import WalletIcon from './svg-icons/WalletIcon'
import OfferIcon from './svg-icons/OfferIcon.vue'
import EntryIcon from './svg-icons/EntryIcon.vue'
import ExitIcon from './svg-icons/ExitIcon.vue'
import PurseIcon from './svg-icons/PurseIcon.vue'
import PlusIcon from './svg-icons/PlusIcon.vue'
export default {
  components: {
    LightingIcon,
    MoonIcon,
    AdjustmentIcon,
    AnalyticsIcon,
    ArrowBoxDownIcon,
    ArrowBoxUpIcon,
    ArrowBoxLeftIcon,
    ArrowBoxRightIcon,
    ArrowCircleDownIcon,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    ArrowCircleUpIcon,
    ArrowDownIcon,
    ArrowHorizontalIcon,
    ArrowLeftIcon,
    ArrowPlusIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    ArrowVerticalIcon,
    BadgeIcon,
    BagIcon,
    BellIcon,
    BookmarkIcon,
    BriefCaseIcon,
    CalendarIcon,
    CallIcon,
    CallOffIcon,
    CallRingingIcon,
    CameraIcon,
    CartIcon,
    ChartPieIcon,
    ChartSquareBarIcon,
    ChatIcon,
    ChevronArrowDownIcon,
    ChevronArrowLeftIcon,
    ChevronArrowRightIcon,
    ChevronArrowUpIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CircleDirectionIcon,
    CircleIcon,
    ClockCircleIcon,
    ClockSquareIcon,
    ControllerIcon,
    CropIcon,
    DocumentArrowDownIcon,
    DocumentArrowUpIcon,
    DocumentIcon,
    DocumentMinusIcon,
    DocumentPlusIcon,
    DocumentXIcon,
    DocumentCodeIcon,
    DotsCircleHorizontalIcon,
    DotsSquareHorizontalIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    EyeFishIcon,
    EyeIcon,
    EyeOffIcon,
    EntryIcon,
    ExitIcon,
    FileIcon,
    FileInvoiceIcon,
    FilterIcon,
    FolderIcon,
    HeartIcon,
    HomeIcon,
    IIcon,
    KeySquareIcon,
    LocationArrowIcon,
    LocationIcon,
    LockClosedIcon,
    LockOpenIcon,
    MessageIcon,
    OfferIcon,
    MicrophoneIcon,
    MicrophoneOnIcon,
    MissedCallIcon,
    PencilAltIcon,
    PencilIcon,
    PurseIcon,
    PlusIcon,
    PhotoGalleryIcon,
    PhotographIcon,
    RefreshIcon,
    RefreshLeftIcon,
    RefreshRightIcon,
    SaveIcon,
    SaveUpIcon,
    ScannerIcon,
    SearchIcon,
    SearchMinusIcon,
    SearchPlusIcon,
    SettingIcon,
    ShieldCheckIcon,
    ShieldXIcon,
    SquareIIcon,
    SquarePlusIcon,
    SquareTickIcon,
    SquareXIcon,
    StarIcon,
    StartIcon,
    SwitchVerticalIcon,
    TableIcon,
    TicketIcon,
    TimerIcon,
    TrashIcon,
    UserAddIcon,
    UserGroupIcon,
    UserIcon,
    UsersIcon,
    VideoIcon,
    ViewGridIcon,
    VolumeIcon,
    VolumeOffIcon,
    VolumeOnIcon,
    WalletIcon
  },
  props: {
    iconName: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 24
    }
  },
  setup() {
    const checkIconComponent = (name) => {
      return name + '-icon'
    }
    return {
      checkIconComponent
    }
  }
}
</script>
