import { Table, Title, Chip } from "@the-curve-consulting/texmo-react-components"

const TablePage = () => {
  return (
    <div className="px-md-5 container-fluid">
  <div className="page-header">
    <div className="row">
      <div className="page-header-column">
        <h1 className="undefined text-nowrap mb-0 title">#abc234</h1>
        <div className="undefined text-nowrap"></div>
        <div className="d-flex mt-3">
          <div className="col">
            <div className="row">
              <div className="d-flex flex-row flex-wrap gap-2">
                <div className="undefined bg-dark-primary text-center chip">Completed</div>
                <div className="undefined bg-secondary text-center chip">Purchase order</div>
                <div className="undefined bg-secondary text-center chip">Due by 29 Jan 2024</div>
                <div className="undefined bg-secondary text-center chip">Assignee: N/A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex right-page-header-column breadcrumbs-container col">
        <p className="undefined breadcrumbs-container">
          <span>
            <a className="breadcrumb-item breadcrumb-inactive" href="/">Home</a>
          </span>
          <span> / <a className="breadcrumb-item breadcrumb-inactive" href="/my-work-requests">Work Requests</a>
          </span>
          <span className="undefined breadcrumb-active"> / abc234</span>
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="d-flex flex-row gap-5 flex-end mt-4">
            <div className="d-flex flex-row gap-3">
              <div className="d-flex align-items-center justify-content-center rounded-pill fw-bold text-uppercase" /**style="width: 44px; height: 44px; background: rgb(229, 229, 229);"*/>UU</div>
              <div className="d-flex flex-column text-nowrap">
                <div className="gray-text">Created on 29 Jan 2024</div>
                <div>By User User</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-page-header-column h-100 page-header-column d-flex flex-column align-items-end" /**style="align-items: flex-end;"*/>
        <div className="mt-4 d-flex flex-nowrap">
          <button type="button" className="text-nowrap gray-text rounded-0 py-2 px-3 btn btn-dark-secondary">Document Data</button>
          <button type="button" className="undefined gray-text rounded-0 py-2 px-3 btn btn-secondary">Workflow</button>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-3 mb-5">
    <div className="d-flex flex-column align-items-end">
      <span /**style="color: gray;"*/>ACME Office Supplies</span>
      <span /**style="color: gray;"*/>1 Main Road</span>
      <span /**style="color: gray;"*/>Sheffield</span>
      <span /**style="color: gray;"*/>S12 3AB</span>
    </div>
    <div className="table-responsive mb-1">
      <table className="table table-hover">
        <thead>
          <tr className="text-uppercase">
            <th scope="col">Price Id</th>
            <th scope="col">Sku Id</th>
            <th scope="col">Sku Description</th>
            <th scope="col">Purchase Price</th>
            <th scope="col">Uom</th>
            <th scope="col">Effective Date</th>
            <th scope="col">Valid To Date</th>
            <th scope="col">Quote Reference</th>
            <th scope="col">Vendor Id</th>
            <th scope="col">Vendor Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2051</td>
            <td>2N1008</td>
            <td>85x80mm partition pad - corrugated box for packing</td>
            <td>100</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 22, 2021</td>
            <td>RevenuePurchase</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>2052</td>
            <td>2N1005</td>
            <td>Dell Laptop 4820</td>
            <td>1500</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 26, 2021</td>
            <td>QA12</td>
            <td>101037</td>
            <td>U4</td>
          </tr>
          <tr>
            <td>2053</td>
            <td>2M1004</td>
            <td>GRAPHITE</td>
            <td>900</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 24, 2021</td>
            <td>Ref TPC</td>
            <td>101027</td>
            <td>BAIN EQUIPMENT</td>
          </tr>
          <tr>
            <td>2053</td>
            <td>2M1004</td>
            <td>GRAPHITE</td>
            <td>1000</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 24, 2021</td>
            <td>Ref TPC</td>
            <td>101027</td>
            <td>BAIN EQUIPMENT</td>
          </tr>
          <tr>
            <td>2054</td>
            <td>2M1002</td>
            <td>NICKEL</td>
            <td>800</td>
            <td>KGS</td>
            <td>December 22, 2021</td>
            <td>December 25, 2021</td>
            <td>Ref TPC</td>
            <td>101031</td>
            <td>TEAYS VALLEY WATER COMPANY</td>
          </tr>
          <tr>
            <td>2054</td>
            <td>2M1002</td>
            <td>NICKEL</td>
            <td>1000</td>
            <td>KGS</td>
            <td>December 22, 2021</td>
            <td>December 25, 2021</td>
            <td>Ref TPC</td>
            <td>101031</td>
            <td>TEAYS VALLEY WATER COMPANY</td>
          </tr>
          <tr>
            <td>2055</td>
            <td>2V1001</td>
            <td>Professional Training</td>
            <td>900</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 31, 2021</td>
            <td>Ref TOM</td>
            <td>101028</td>
            <td>BAIRD SERVICE</td>
          </tr>
          <tr>
            <td>2055</td>
            <td>2V1001</td>
            <td>Professional Training</td>
            <td>1000</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 31, 2021</td>
            <td>Ref TOM</td>
            <td>101028</td>
            <td>BAIRD SERVICE</td>
          </tr>
          <tr>
            <td>2056</td>
            <td>2M1005</td>
            <td>COBALT</td>
            <td>800</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 31, 2021</td>
            <td>Ref -tpc</td>
            <td>101041</td>
            <td>WARSAW TOOL SUPPLY</td>
          </tr>
          <tr>
            <td>2056</td>
            <td>2M1005</td>
            <td>COBALT</td>
            <td>1000</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 31, 2021</td>
            <td>Ref -tpc</td>
            <td>101041</td>
            <td>WARSAW TOOL SUPPLY</td>
          </tr>
          <tr>
            <td>2056</td>
            <td>2M1005</td>
            <td>COBALT</td>
            <td>900</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 31, 2021</td>
            <td>Ref -tpc</td>
            <td>101041</td>
            <td>WARSAW TOOL SUPPLY</td>
          </tr>
          <tr>
            <td>2057</td>
            <td>2M1004</td>
            <td>GRAPHITE</td>
            <td>180</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 31, 2021</td>
            <td>Reftpc</td>
            <td>101039</td>
            <td>UNITED TOOL COMPANY,INC.</td>
          </tr>
          <tr>
            <td>2057</td>
            <td>2M1004</td>
            <td>GRAPHITE</td>
            <td>200</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 31, 2021</td>
            <td>Reftpc</td>
            <td>101039</td>
            <td>UNITED TOOL COMPANY,INC.</td>
          </tr>
          <tr>
            <td>2058</td>
            <td>2N1009</td>
            <td>HP Laptop</td>
            <td>1203</td>
            <td>NOS</td>
            <td>December 22, 2021</td>
            <td>December 22, 2021</td>
            <td>RevenuePurchase</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>2059</td>
            <td>2N1010</td>
            <td>2FA001 M1 Fixture</td>
            <td>15000</td>
            <td>NOS</td>
            <td>December 29, 2021</td>
            <td>December 29, 2021</td>
            <td>RevenuePurchase</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>2060</td>
            <td>2N1011</td>
            <td>2FA005 CHUCK and Jaws</td>
            <td>2500</td>
            <td>PAR</td>
            <td>December 29, 2021</td>
            <td>December 29, 2021</td>
            <td>RevenuePurchase</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>2061</td>
            <td>2N1012</td>
            <td>FANUC Robot Drill Machine</td>
            <td>15000</td>
            <td>NOS</td>
            <td>December 31, 2021</td>
            <td>December 31, 2021</td>
            <td>RevenuePurchase</td>
            <td>101024</td>
            <td>A.W.BELL MACHINERY PTY LTD</td>
          </tr>
          <tr>
            <td>2062</td>
            <td>2N1013</td>
            <td>DNMG12535 Drill Machine</td>
            <td>15000</td>
            <td>NOS</td>
            <td>January 03, 2022</td>
            <td>January 03, 2022</td>
            <td>RevenuePurchase</td>
            <td>101039</td>
            <td>UNITED TOOL COMPANY,INC.</td>
          </tr>
          <tr>
            <td>2063</td>
            <td>2N1014</td>
            <td>WAX Machines</td>
            <td>19000</td>
            <td>NOS</td>
            <td>January 03, 2022</td>
            <td>January 03, 2022</td>
            <td>RevenuePurchase</td>
            <td>101030</td>
            <td>TAYLORS WAX PROCESSING CO. INC.</td>
          </tr>
          <tr>
            <td>2064</td>
            <td>2N1015</td>
            <td>MS Scrap</td>
            <td>15</td>
            <td>KGS</td>
            <td>January 05, 2022</td>
            <td>January 05, 2022</td>
            <td>RevenuePurchase</td>
            <td>101033</td>
            <td>TERMINAL STEEL &amp; EQUIPMENT CO.</td>
          </tr>
          <tr>
            <td>2065</td>
            <td>2N1016</td>
            <td>AIR Filter machine</td>
            <td>19000</td>
            <td>NOS</td>
            <td>January 05, 2022</td>
            <td>January 05, 2022</td>
            <td>RevenuePurchase</td>
            <td>101035</td>
            <td>U.S. FILTER ABRASIVE PRODUCTS</td>
          </tr>
          <tr>
            <td>2066</td>
            <td>2M1001</td>
            <td>PURE SILICON</td>
            <td>152.6</td>
            <td>BOX</td>
            <td>January 07, 2022</td>
            <td>January 22, 2022</td>
            <td>QA34</td>
            <td>101025</td>
            <td>B&amp;B REFRACTORIES, INC.</td>
          </tr>
          <tr>
            <td>2067</td>
            <td>2M1005</td>
            <td>COBALT</td>
            <td>1525.52</td>
            <td>NOS</td>
            <td>January 10, 2022</td>
            <td>January 28, 2022</td>
            <td>QA52</td>
            <td>101037</td>
            <td>U4</td>
          </tr>
          <tr>
            <td>2068</td>
            <td>2M1002</td>
            <td>NICKEL</td>
            <td>156.89</td>
            <td>KGS</td>
            <td>March 03, 2022</td>
            <td>March 26, 2022</td>
            <td>QA12</td>
            <td>101027</td>
            <td>BAIN EQUIPMENT</td>
          </tr>
          <tr>
            <td>2069</td>
            <td>2N1017</td>
            <td>Makino VMC 2565 Milling Machine</td>
            <td>15256</td>
            <td>NOS</td>
            <td>March 03, 2022</td>
            <td>March 03, 2022</td>
            <td>RevenuePurchase</td>
            <td>101024</td>
            <td>A.W.BELL MACHINERY PTY LTD</td>
          </tr>
          <tr>
            <td>2070</td>
            <td>2N1018</td>
            <td>Makino HMC 7854 Griding Machine</td>
            <td>15868</td>
            <td>NOS</td>
            <td>March 03, 2022</td>
            <td>March 03, 2022</td>
            <td>RevenuePurchase</td>
            <td>101024</td>
            <td>A.W.BELL MACHINERY PTY LTD</td>
          </tr>
          <tr>
            <td>2071</td>
            <td>2N1019</td>
            <td>Fanuc Robot Drilling Machine</td>
            <td>16582</td>
            <td>NOS</td>
            <td>March 03, 2022</td>
            <td>March 03, 2022</td>
            <td>RevenuePurchase</td>
            <td>101024</td>
            <td>A.W.BELL MACHINERY PTY LTD</td>
          </tr>
          <tr>
            <td>3068</td>
            <td>2N1020</td>
            <td>Dell Laptop</td>
            <td>1000001</td>
            <td>NOS</td>
            <td>April 12, 2022</td>
            <td>April 12, 2022</td>
            <td>RevenuePurchase</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>3069</td>
            <td>2N1021</td>
            <td>Printer</td>
            <td>525858.56</td>
            <td>NOS</td>
            <td>April 12, 2022</td>
            <td>April 12, 2022</td>
            <td>RevenuePurchase</td>
            <td>101021</td>
            <td>A&amp;M ENGINEERING,INC.</td>
          </tr>
          <tr>
            <td>3070</td>
            <td>2N1003</td>
            <td>Rust Oil</td>
            <td>100000.6</td>
            <td>LTS</td>
            <td>April 12, 2022</td>
            <td>May 08, 2022</td>
            <td>s</td>
            <td>101023</td>
            <td>A.C.E. TOOLING, INC.</td>
          </tr>
          <tr>
            <td>3071</td>
            <td>2N1015</td>
            <td>MS Scrap</td>
            <td>15225.2568</td>
            <td>KGS</td>
            <td>April 18, 2022</td>
            <td>April 29, 2022</td>
            <td>EMail</td>
            <td>101042</td>
            <td>ZaroMet Inc</td>
          </tr>
          <tr>
            <td>3072</td>
            <td>2N1015</td>
            <td>MS Scrap</td>
            <td>15225.2568</td>
            <td>KGS</td>
            <td>April 18, 2022</td>
            <td>April 29, 2022</td>
            <td>EMail</td>
            <td>101042</td>
            <td>ZaroMet Inc</td>
          </tr>
          <tr>
            <td>3073</td>
            <td>2N1006</td>
            <td>Cotton Gloves</td>
            <td>5.968</td>
            <td>PRS</td>
            <td>April 18, 2022</td>
            <td>May 08, 2022</td>
            <td>z</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>3073</td>
            <td>2N1006</td>
            <td>Cotton Gloves</td>
            <td>5.6</td>
            <td>PRS</td>
            <td>April 18, 2022</td>
            <td>May 08, 2022</td>
            <td>z</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>3073</td>
            <td>2N1006</td>
            <td>Cotton Gloves</td>
            <td>0.9696</td>
            <td>PRS</td>
            <td>April 18, 2022</td>
            <td>May 08, 2022</td>
            <td>z</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>3073</td>
            <td>2N1006</td>
            <td>Cotton Gloves</td>
            <td>5.61</td>
            <td>PRS</td>
            <td>April 18, 2022</td>
            <td>May 08, 2022</td>
            <td>z</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>3073</td>
            <td>2N1006</td>
            <td>Cotton Gloves</td>
            <td>5.9696</td>
            <td>PRS</td>
            <td>April 18, 2022</td>
            <td>May 08, 2022</td>
            <td>z</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>3073</td>
            <td>2N1006</td>
            <td>Cotton Gloves</td>
            <td>233.987</td>
            <td>PRS</td>
            <td>April 18, 2022</td>
            <td>May 08, 2022</td>
            <td>z</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>3074</td>
            <td>2V1003</td>
            <td>Printer Service</td>
            <td>1500</td>
            <td>CUM</td>
            <td>April 19, 2022</td>
            <td>April 19, 2022</td>
            <td>RevenuePurchase</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>3075</td>
            <td>2M1001</td>
            <td>PURE SILICON</td>
            <td>152.2585</td>
            <td>BOX</td>
            <td>April 28, 2022</td>
            <td>May 01, 2022</td>
            <td>NA</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>3076</td>
            <td>2N1021</td>
            <td>Printer</td>
            <td>456.7</td>
            <td>NOS</td>
            <td>April 26, 2022</td>
            <td>April 28, 2022</td>
            <td>q1</td>
            <td>101038</td>
            <td>ULTRASONIC SERVICES PLUS</td>
          </tr>
          <tr>
            <td>3076</td>
            <td>2N1021</td>
            <td>Printer</td>
            <td>456.7812</td>
            <td>NOS</td>
            <td>April 26, 2022</td>
            <td>April 28, 2022</td>
            <td>q1</td>
            <td>101038</td>
            <td>ULTRASONIC SERVICES PLUS</td>
          </tr>
          <tr>
            <td>3076</td>
            <td>2N1021</td>
            <td>Printer</td>
            <td>456</td>
            <td>NOS</td>
            <td>April 26, 2022</td>
            <td>April 28, 2022</td>
            <td>q1</td>
            <td>101038</td>
            <td>ULTRASONIC SERVICES PLUS</td>
          </tr>
          <tr>
            <td>3076</td>
            <td>2N1021</td>
            <td>Printer</td>
            <td>456</td>
            <td>NOS</td>
            <td>April 26, 2022</td>
            <td>April 28, 2022</td>
            <td>q1</td>
            <td>101038</td>
            <td>ULTRASONIC SERVICES PLUS</td>
          </tr>
          <tr>
            <td>3077</td>
            <td>2N1022</td>
            <td>Test</td>
            <td>225.2585</td>
            <td>CUM</td>
            <td>April 28, 2022</td>
            <td>April 28, 2022</td>
            <td>RevenuePurchase</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>3078</td>
            <td>2V1004</td>
            <td>Printer Service</td>
            <td>158.5858</td>
            <td>NOS</td>
            <td>April 28, 2022</td>
            <td>April 28, 2022</td>
            <td>RevenuePurchase</td>
            <td>101021</td>
            <td>A&amp;M ENGINEERING,INC.</td>
          </tr>
          <tr>
            <td>3079</td>
            <td>2V1005</td>
            <td>VMC Machine Service</td>
            <td>15258.25</td>
            <td>NOS</td>
            <td>April 28, 2022</td>
            <td>April 28, 2022</td>
            <td>RevenuePurchase</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>3080</td>
            <td>2N1023</td>
            <td>Test Item</td>
            <td>25.5852</td>
            <td>LRS</td>
            <td>April 28, 2022</td>
            <td>April 28, 2022</td>
            <td>RevenuePurchase</td>
            <td>101026</td>
            <td>B&amp;M INSTRUMENTS,INC.</td>
          </tr>
          <tr>
            <td>4068</td>
            <td>2N1024</td>
            <td>MS Scrap</td>
            <td>156</td>
            <td>TON</td>
            <td>May 18, 2023</td>
            <td>May 18, 2023</td>
            <td>RevenuePurchase</td>
            <td>101026</td>
            <td>B&amp;M INSTRUMENTS,INC.</td>
          </tr>
          <tr>
            <td>4069</td>
            <td>2N1025</td>
            <td>Carton</td>
            <td>36.5</td>
            <td>NOS</td>
            <td>May 18, 2023</td>
            <td>May 18, 2023</td>
            <td>RevenuePurchase</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>4070</td>
            <td>2N1026</td>
            <td>Carton box</td>
            <td>36.7</td>
            <td>NOS</td>
            <td>May 19, 2023</td>
            <td>May 19, 2023</td>
            <td>RevenuePurchase</td>
            <td>101022</td>
            <td>A&amp;V FIXTURES</td>
          </tr>
          <tr>
            <td>5068</td>
            <td>2N1027</td>
            <td>Test Item</td>
            <td>15.2586</td>
            <td>BND</td>
            <td>October 10, 2023</td>
            <td>October 10, 2023</td>
            <td>RevenuePurchase</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>5069</td>
            <td>2N1028</td>
            <td>Test Items QuoteRef</td>
            <td>150.2558</td>
            <td>BAG</td>
            <td>October 11, 2023</td>
            <td>October 11, 2023</td>
            <td>RevenuePurchase</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>5070</td>
            <td>2N1029</td>
            <td>Dell monitor size 20X20</td>
            <td>120.2535</td>
            <td>LRS</td>
            <td>October 13, 2023</td>
            <td>October 13, 2023</td>
            <td>RevenuePurchase</td>
            <td>101024</td>
            <td>A.W.BELL MACHINERY PTY LTD</td>
          </tr>
          <tr>
            <td>5071</td>
            <td>2N1009</td>
            <td>HP Laptop</td>
            <td>1000</td>
            <td>NOS</td>
            <td>December 22, 2023</td>
            <td>January 22, 2024</td>
            <td>REF 6754/38</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>5071</td>
            <td>2N1009</td>
            <td>HP Laptop</td>
            <td>875</td>
            <td>NOS</td>
            <td>December 22, 2023</td>
            <td>January 22, 2024</td>
            <td>REF 6754/38</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
          <tr>
            <td>5071</td>
            <td>2N1009</td>
            <td>HP Laptop</td>
            <td>900</td>
            <td>NOS</td>
            <td>December 22, 2023</td>
            <td>January 22, 2024</td>
            <td>REF 6754/38</td>
            <td>101020</td>
            <td>A&amp;B FABRICATING</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="d-flex flex-column ">
      <span /**style="color: gray;"*/>
        <span>Sub Total: </span>
        <b>£104.99</b>
      </span>
      <span /**style="color: gray;"*/>
        <span>Tax: </span>
        <b>£33.99</b>
      </span>
      <span /**style="color: gray;"*/>
        <span>Total: </span>
        <b>£138.98</b>
      </span>
    </div>
  </div>
</div>
  )
}

export default TablePage;
