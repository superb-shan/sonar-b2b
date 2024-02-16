import TableRow from "./TableRow";

export default function Table({headers, tenData=[], setActive, mergeTable}) {

    let type, schemeData;
    if (headers[0] == "Invoice Month-Year") type = 'downloadInvoice';
    if(headers[3]=='Systematic Plans') type = 'sip';
    if(headers[0]=='Portfolio Name'){
        type = 'portfolio';
    }
    if(headers[2]=='Rating') type = 'rating';
    if(headers[1]=='Scheme Name' && headers[2]=='FundsIndia Rating') type = 'schemes';    
    if(headers[0]=='Scheme Name' && headers[1]=='Amount (Rs.)') type = 'AUM'

    return(
        <div className={`max-h-[640px] flex flex-col bg-white p-[20px] pb-[10px] ${ mergeTable ? " rounded-b-[15px] " : ' rounded-[15px] '} text-left overflow-auto`}>
            {
                (tenData.length === 0) ?
                <h1 className="text-[24px] font-bold text-center">
                    No Data Found !
                </h1>
                :
                <table cellPadding={'15px'} >
                    <tr className="border-b-[2px] border-[#E2E2E2] ">
                        {headers.map( (ele, i) =>{

                            if (type == 'AUM' && i == 1) 
                                return <th className={`pb-[20px] pt-[5px] font-medium text-right`}>{ele}</th>
                            return <th className={`pb-[20px] pt-[5px] font-medium `}>{ele}</th>
                        })}
                    </tr>
                    {
                        tenData.map( (ele, index) =>{
                            if (type=='schemes' && ele[0] != index+1){
                                if (typeof ele[0] == 'number') ele.shift()
                                ele.unshift(index+1);
                            }
                            return <TableRow data={ele} setActive={setActive} type={type} />
                        })
                    }
                </table>
            }
        </div>
    );
}