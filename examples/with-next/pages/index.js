import styled from 'styled-components';
import {
  Box,
  Avatar,
  Card,
  Button,
  ButtonGroup,
  Slider,
  Input,
  FieldInput,
  TextArea,
  MultipleInput,
  Hint,
  Addon,
  Switch,
  Checkbox,
  CheckboxGroup,
} from '@vital-ui/react';
import { Music } from '@vital-ui/react-icon';

const AVATAR = [
  { size: 'xsmall', circle: true, outline: true },
  { gender: 'male', size: 'small', circle: true, outline: true },
  { gender: 'female', size: 'medium', circle: true, badge: 10 },
  { gender: 'male', size: 'large', circle: true },
  { gender: 'female', size: 'xlarge', circle: true, badge: 100 },
];

const BUTTON_STYLE = ['default', 'flat', 'subtle', 'light'];

const NATRUE = [
  'default',
  'primary',
  'success',
  'info',
  'alarm',
  'warning',
];

const SIZE = ['xlarge', 'large', 'medium', 'small', 'xsmall'];

const FormWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
`;

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;
const Section = ({ title, children }) => (
  <Box pt="20px" pb="30px">
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);
export default () => (
  <div>
    <Section title="Avatar">
      {AVATAR.map((avatar, i) => (
        <Wrapper key={i}>
          <Avatar {...avatar} />
        </Wrapper>
      ))}
    </Section>
    <Section title="Button">
      <ButtonGroup
        marginHorizontal="10px"
        style={{ paddingBottom: '20px' }}
      >
        <Button link>Link</Button>
        <Button dark link>
          Dark Link
        </Button>
        <Button link underline>
          Link underline
        </Button>
        <Button link underline dark>
          Dark Link underline
        </Button>
      </ButtonGroup>
      {BUTTON_STYLE.map((button, i) => (
        <ButtonGroup
          key={i}
          marginHorizontal="10px"
          style={{ paddingBottom: '20px' }}
        >
          {NATRUE.map((nature, index) => (
            <Button
              nature={nature}
              key={`next${index}`}
              flat={button === 'flat'}
              subtle={button === 'subtle'}
              light={button === 'light'}
            >
              {nature === 'default' ? button : nature}
            </Button>
          ))}
        </ButtonGroup>
      ))}
      <ButtonGroup>
        {SIZE.map((size, i) => (
          <Button size={size} key={i} flat nature="primary">
            {size}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup>
        {SIZE.reverse().map((size, i) => (
          <Button key={i} size={size} flat>
            {size}
          </Button>
        ))}
      </ButtonGroup>
    </Section>
    <Section title="Card">
      <Vertical>
        <Card width="300px">
          <Card.Content style={{ textAlign: 'center' }}>
            <Music name="thumbs-up" fontSize="90" color="#0e86fe" />
            <div
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.5rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                paddingTop: '1.25rem',
                width: '100%',
                color: '#456297',
              }}
            >
              Congrats
            </div>
            <div
              style={{
                fontSize: '0.93333rem',
                lineHeight: '1.25rem',
                paddingTop: '10px',
              }}
            >
              Let’s Get Started
            </div>
          </Card.Content>
          <Card.Footer>
            <Card.FooterButton onClick={() => {}} primary>
              Confirm
            </Card.FooterButton>
          </Card.Footer>
        </Card>
      </Vertical>
    </Section>
    <Section title="">
      <FormWrapper>
        <FieldInput required label="Username">
          <Input placeholder="Enter your username" />
        </FieldInput>
        <FieldInput required label="Fullname">
          <MultipleInput>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </MultipleInput>
        </FieldInput>
        <FieldInput required label="Birthday">
          <MultipleInput>
            <Input placeholder="Month" />
            <Input placeholder="Day" />
            <Input placeholder="Year" />
          </MultipleInput>
        </FieldInput>
        <FieldInput label="Website">
          <MultipleInput>
            <Addon>http:</Addon>
            <Input placeholder="LabelAddon on the left" />
          </MultipleInput>
        </FieldInput>
        <FieldInput label="Comment" inline>
          <TextArea placeholder="Comment here" rows={3} />
        </FieldInput>
        <FieldInput label="Interested in" inline>
          <CheckboxGroup
            style={{ paddingTop: 'calc(0.46633rem + 2px)' }}
          >
            <Checkbox round label="React" />
            <Checkbox defaultChecked label="CSS" />
            <Checkbox label="Vital" />
          </CheckboxGroup>
        </FieldInput>
        <FieldInput label="Value" inline>
          <Slider
            max={2}
            min={1}
            step={0.01}
            onChange={() => {}}
            value={1}
          />
        </FieldInput>
      </FormWrapper>
    </Section>
  </div>
);

const Wrapper = styled.div`
  margin-right: 5px;
  display: inline-block;
`;

const Vertical = styled.div`
  margin-bottom: 10px;
`;
