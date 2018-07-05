/**
 * @flow
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import {
  ThemeProvider,
  defaultVariables,
  defaultTheme,
  colorPaletteGenerator,
  defaultComponentsTheme,
} from '@vital-ui/react-theme';
import Icon, {
  withIcon,
  defaultIcon,
  IconContext,
} from '@vital-ui/react-icon';

import Avatar from '@vital-ui/react-avatar';
import Button, { ButtonGroup } from '@vital-ui/react-button';
import Badge from '@vital-ui/react-badge';
import Card from '@vital-ui/react-card';
import {
  Input,
  StatelessInput,
  Hint,
  Addon,
  Label,
  MultipleInput,
  FieldInput,
  TextArea,
  StatelessTextArea,
  Radio,
  RadioGroup,
  Switch,
  Select,
  Slider,
  CheckboxGroup,
  Checkbox,
  Tag,
  MultipleSelect,
} from '@vital-ui/react-form';
import Modal from '@vital-ui/react-modal';
import { List, ListContent, ListItem } from '@vital-ui/react-list';
import Pill from '@vital-ui/react-pill';
import Tooltip from '@vital-ui/react-tooltip';
import Pagination from '@vital-ui/react-pagination';
import Menu from '@vital-ui/react-menu';
import {
  Table,
  SimpleTable,
  defaultCellRenderer,
  Column,
} from '@vital-ui/react-table';
import Tabs from '@vital-ui/react-tabs';
import Layout from '@vital-ui/react-layout';
import * as utils from '@vital-ui/react-utils';
import VitalProvider from './VitalProvider';

const { Box } = utils;

export {
  Avatar,
  Button,
  ButtonGroup,
  Box,
  Checkbox,
  CheckboxGroup,
  Card,
  Badge,
  Icon,
  Radio,
  RadioGroup,
  Switch,
  Input,
  StatelessInput,
  Label,
  FieldInput,
  TextArea,
  StatelessTextArea,
  MultipleInput,
  Hint,
  Addon,
  Select,
  List,
  ListContent,
  ListItem,
  Pill,
  Slider,
  Tooltip,
  Pagination,
  ThemeProvider,
  defaultTheme,
  withIcon,
  Modal,
  Menu,
  Table,
  SimpleTable,
  Column,
  defaultCellRenderer,
  Tabs,
  Layout,
  utils,
  colorPaletteGenerator,
  defaultComponentsTheme,
  defaultVariables,
  IconContext,
  defaultIcon,
  VitalProvider,
  MultipleSelect,
  Tag,
};
