import icon from '@/assets/img/gear.png';
import React from 'react';
import styles from './SettingsButton.module.scss';

export default function SettingsButton() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const rotation = isDropdownOpen ? 'rotate(45deg)' : 'rotate(0deg)';

  return (
    <div className={styles.settingsBtn} onClick={toggleDropdown}>
      <img className={styles.settingsIcon} src={icon} style={{ transform: `${rotation}` }} />
      {isDropdownOpen && (
        <div className={styles.dropdown} id="settings-menu">
          <a className={styles.dropdownEl} href="#logout">
            Выйти из аккаунта
          </a>
        </div>
      )}
    </div>
  );
}
