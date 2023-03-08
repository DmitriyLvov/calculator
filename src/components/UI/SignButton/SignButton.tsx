import { Button } from 'antd';

import styles from './SignButton.module.scss';

interface ISignButtonProps {
  sign: string;
}

const SignButton = ({ sign }: ISignButtonProps) => {
  return <Button className={styles.button}>{sign}</Button>;
};

export default SignButton;
