export type SettingControlType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'multi-select'
  | 'switch'
  | 'radio'
  | 'button'
  | 'danger'
  | 'cards'
  | 'list'
  | 'link';

export interface SettingOption {
  label: string;
  value: string;
}

export interface SettingItem {
  id: string;
  label: string;
  description: string;
  type: SettingControlType;
  value?: string | boolean;
  placeholder?: string;
  options?: SettingOption[];
  entries?: SettingOption[];
}

export interface SettingsSection {
  id: string;
  title: string;
  description: string;
  items: SettingItem[];
}
