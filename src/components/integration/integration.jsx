import { NavLink } from 'react-router-dom'
import notion from "../../assets/images/notion.svg"
import slack from "../../assets/images/slack.svg"
import google_drive from "../../assets/images/google_drive.svg"
import intercom from "../../assets/images/intercom.svg"
import jira from "../../assets/images/jira.svg"
import dropbox from "../../assets/images/dropbox.svg"
import stripe from "../../assets/images/stripe.svg"
import zapier from "../../assets/images/zapier.svg"
import figma from "../../assets/images/figma.svg"
import confluence from "../../assets/images/confluence.svg"
import mailchimp from "../../assets/images/mailchimp.svg"
import zendeck from "../../assets/images/zendesk.svg"
import calendar from "../../assets/images/g-calendar.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import discord from "../../assets/images/discord.svg"
import bitbucket from "../../assets/images/bitbucket.svg"


const Integration = () => {
    return (
        <div className="Integration">
            <div className="container">
                <p className="Integration-title">Integrations</p>
                <h3 className="Integration-text">Get more value from your tools</h3>
                <p className="Integration-dicr">Connect your tools, connect your teams. With over 200 apps already available in our directory, your team’s favourite tools are just a click away.</p>
                <div className="Integration_logos">
                    <img src={notion} alt="img" className="Integration_logos-img" />
                    <img src={slack} alt="img" className="Integration_logos-img" />
                    <img src={google_drive} alt="img" className="Integration_logos-img" />
                    <img src={intercom} alt="img" className="Integration_logos-img" />
                    <img src={jira} alt="img" className="Integration_logos-img" />
                    <img src={dropbox} alt="img" className="Integration_logos-img" />
                    <img src={stripe} alt="img" className="Integration_logos-img" />
                    <img src={zapier} alt="img" className="Integration_logos-img" />
                    <img src={figma} alt="img" className="Integration_logos-img" />
                    <img src={confluence} alt="img" className="Integration_logos-img" />
                    <img src={mailchimp} alt=" img" className="Integration_logos-img" />
                    <img src={zendeck} alt="img" className="Integration_logos-img" />
                    <img src={calendar} alt="img" className="Integration_logos-img" />
                    <img src={whatsapp} alt="img" className="Integration_logos-img" />
                    <img src={discord} alt="img" className="Integration_logos-img" />
                    <img src={bitbucket} alt="img" className="Integration_logos-img" />
                </div>
                <div className="Integration_btn ">
                    <NavLink className="header__btn-link btn" to={'/'}>
                        View all integrations
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Integration;