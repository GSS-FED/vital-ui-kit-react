/**
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import {
  ThemeProvider,
  defaultVariables,
  defaultTheme,
  colorPaletteGenerator,
  defaultComponentsTheme,
} from './theme';
import Icon, {
// @ts-ignore
  withIcon,
  // @ts-ignore
  defaultIcon,
  // @ts-ignore
  IconContext,
} from '@vital-ui/react-icon';

import Avatar from './avatar';
import Button, { ButtonGroup } from './button';
import Badge from './badge';
import Card from './card';
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
  MultiSelect,
} from './form';
import Modal from './modal';
import { List, ListContent, ListItem } from './list';
import Pill from './pill';
import Tooltip from './tooltip';
import Pagination from './pagination';
import Menu from './menu';
import Tabs from './tabs';
import Layout from './layout';
import * as utils from './utils';
import VitalProvider from './VitalProvider';

const { Box, Flex } = utils;

export {
  Avatar,
  Button,
  ButtonGroup,
  Box,
  Flex,
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
  Tabs,
  Layout,
  utils,
  colorPaletteGenerator,
  defaultComponentsTheme,
  defaultVariables,
  IconContext,
  defaultIcon,
  VitalProvider,
  MultiSelect,
  Tag,
};
