// third-party
import { merge } from 'lodash'

// project import
import Accordion from './Accordion'
import AccordionDetails from './AccordionDetails'
import AccordionSummary from './AccordionSummary'
import Alert from './Alert'
import AlertTitle from './AlertTitle'
import Autocomplete from './Autocomplete'
import Badge from './Badge'
import Button from './Button'
import ButtonBase from './ButtonBase'
import ButtonGroup from './ButtonGroup'
import CardContent from './CardContent'
import Checkbox from './Checkbox'
import Chip from './Chip'
import Container from './Container'
import CssBaseline from './CssBaseline'
import Dialog from './Dialog'
import DialogContentText from './DialogContentText'
import DialogTitle from './DialogTitle'
import Fab from './Fab'
import IconButton from './IconButton'
import InputBase from './InputBase'
import InputLabel from './InputLabel'
import LinearProgress from './LinearProgress'
import Link from './Link'
import ListItemButton from './ListItemButton'
import ListItemIcon from './ListItemIcon'
import LoadingButton from './LoadingButton'
import MenuItem from './MenuItem'
import OutlinedInput from './OutlinedInput'
import Pagination from './Pagination'
import PaginationItem from './PaginationItem'
import Popover from './Popover'
import Radio from './Radio'
import Slider from './Slider'
import Snackbar from './Snackbar'
import Switch from './Switch'
import Tab from './Tab'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableFooter from './TableFooter'
import TableHead from './TableHead'
import TablePagination from './TablePagination'
import TableRow from './TableRow'
import TabPanel from './TabPanel'
import Tabs from './Tabs'
import ToggleButton from './ToggleButton'
import TreeItem from './TreeItem'
import Typography from './Typography'

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Accordion(theme),
    AccordionDetails(theme),
    AccordionSummary(theme),
    Alert(theme),
    AlertTitle(),
    Autocomplete(),
    Badge(theme),
    Button(theme),
    ButtonBase(theme),
    ButtonGroup(),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    Container(theme),
    CssBaseline(),
    Dialog(theme),
    DialogContentText(theme),
    DialogTitle(),
    Fab(theme),
    IconButton(theme),
    InputBase(),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemButton(theme),
    ListItemIcon(theme),
    LoadingButton(theme),
    MenuItem(theme),
    OutlinedInput(theme),
    Pagination(),
    PaginationItem(theme),
    Popover(theme),
    Radio(theme),
    Slider(theme),
    Snackbar(theme),
    Switch(theme),
    Tab(theme),
    TabPanel(theme),
    TableBody(theme),
    TableCell(theme),
    TableFooter(theme),
    TableHead(theme),
    TablePagination(),
    TableRow(),
    Tabs(),
    ToggleButton(theme),
    TreeItem(),
    Typography()
  )
}
