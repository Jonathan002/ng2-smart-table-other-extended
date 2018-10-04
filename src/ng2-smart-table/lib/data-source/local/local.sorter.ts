export class LocalSorter {

  protected static COMPARE = (direction: any, a: any, b: any) => {
    a = (typeof a.td === 'string') ? a.td : a;
    b = (typeof b.td === 'string') ? b.td : b;

    if (a < b) {
      return -1 * direction;
    }
    if (a > b) {
      return direction;
    }
    return 0;
  }

  static sort(data: Array<any>, field: string, direction: string, customCompare?: Function): Array<any> {
    const dir: number = (direction === 'asc') ? 1 : -1;
    const compare: Function = customCompare ? customCompare : this.COMPARE;

    return data.sort((a, b) => {
      return compare.call(null, dir, a[field], b[field]);
    });
  }
}
