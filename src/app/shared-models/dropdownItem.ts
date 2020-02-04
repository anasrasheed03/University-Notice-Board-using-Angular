export class DropdownItem {
  public codeId: number
  public codeValue: string
}

export class DropdownObject extends DropdownItem {

  public codeDtos: DropdownItem[];
  public codeTypeId: number;

}

export class DropdownValues extends DropdownItem{
  public  list : DropdownItem[]=[];
  public  preSelectedValue: number =null;
}