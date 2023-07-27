import { Select } from 'antd';
import cities from 'constants/cities';
import { useCity } from 'hooks/useCity';

export default function SelectCity({ style = null, ...props }) {
  const { city, setCity } = useCity();
  const defaultCity = cities.find((item) => item.value === city);

  return (
    <Select
      defaultValue={defaultCity || cities[2]}
      options={cities}
      style={{
        width: '100%',
        ...style,
      }}
      onChange={(value) => setCity(value)}
      {...props}
    />
  );
}
