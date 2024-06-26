import Head from "next/head"

const Accessibility = () => {

    return(
        <div className="policyContainer page-content">
           <Head>
                <title>Jonathan Floyd - Accessibility statement</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Accessibility statement for the Jonathan Floyd website" />
            </Head>
            <span>
                <h1>Accessibility statement</h1>
                <p>Last updated 04.04.24</p>

                JonathanFloyd.com is committed to ensuring accessibility for all visitors to our website. We strive to make our website accessible to individuals with disabilities and continuously improve the user experience for everyone.

                <h2>Standards Compliance</h2>
                We aim to meet or exceed the requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities, and we regularly review our website to ensure we adhere to these standards.

                <h2>Accessible Features</h2>
                Our website incorporates various features to enhance accessibility, including:

                    <p>Alternative text for images and non-text content</p>
                    <p>Clear and consistent navigation</p>
                    <p>Keyboard navigation support</p>
                    <p>Scalable text and resizable layout</p>
                    <p>Descriptive links and headings for easier navigation</p>
                    <p>Compatibility with screen readers and other assistive technologies</p>

                {/* <h2>Feedback</h2>
                We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us at [Your Contact Information]. We will make every effort to address your concerns and enhance the accessibility of our website. */}

                <h2>Ongoing Efforts</h2>
                Accessibility is an ongoing effort, and we are committed to continually improving the accessibility of our website. We regularly review our website, conduct accessibility assessments, and implement necessary changes to ensure that all visitors can access the information and services we provide.

                {/* Contact Us
                If you have any questions or concerns about the accessibility of our website or need assistance accessing information, please contact us at [Your Contact Information]. We are here to help and are committed to providing equal access to all visitors. */}

            </span>
        </div>
    )
}

export default Accessibility