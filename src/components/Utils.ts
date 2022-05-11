
export function ValueToMoney(val)
{
    let num = val / Math.pow(10, 18);
    return num;
}

export function TimestampToDate(ts) 
{
    const date = new Date(ts*1000);
    return date.toLocaleDateString("en-US");
}