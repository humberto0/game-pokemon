export interface FormNewPokemon {
  name: string;
  hp: number;
  weight: number;
  height: number;
  select: {
    value: string;
  }[];
  ability_1: string;
  ability_2: string;
  ability_3: string;
  ability_4: string;
  def: number;
  atk: number;
  def_master: number;
  atk_master: number;
  speed: number;
}
export interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
