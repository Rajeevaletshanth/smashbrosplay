"use client";
import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/registration wall.png";
import mail from "@/public/images/contact/mail.png";
import phone from "@/public/images/contact/phone.png";
import location from "@/public/images/contact/location.png";
import { useEffect, useState } from "react";
import google from "@/public/images/google.png";
import apple from "@/public/images/apple.png";
import meta from "@/public/images/meta.png";
import MascotSelection from "./home/MascotSelection";
import axios from "axios";
import { useSearchParams } from 'next/navigation';

const RegistrationSection = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mascot, setMascot] = useState("");
  const [opened, setOpened] = useState<any>(null)
  const [error, setError] = useState(null);
  const [teamName, setTeamName] = useState("")
  const [captainName, setCaptainName] = useState("")
  const [partnerName, setPartnerName] = useState("")
  const [secretCode, setSecretCode] = useState("")
  const [selectedMascot, setSelectedMascot] = useState<any>(null)
  const [data, setData] = useState<any>(null)

  const searchParams = useSearchParams();

  const getData = async (code:any) => {
    try {
      const response: any = await axios.get(`https://api.brexe.com/sbplay/getBySecret/${code}`)
      if (response.data.response === "success") {
        setCaptainName(response.data.data[0].captain_name)
        setPartnerName(response.data.data[0].partner_name)
        if (response.data.data[0].is_registered) {
          setData(response.data.data[0])
          setTeamName(response.data.data[0].team_name)
          setSecretCode(response.data.data[0].secret_code)
          if (response.data.data[0].fav_mascot) {
            setMascot(response.data.data[0].fav_mascot)
            setOpened(response.data.data[0].fav_mascot === 'Ninja' ? "one" :
              response.data.data[0].fav_mascot === 'King' ? "two" :
                response.data.data[0].fav_mascot === 'Wolf' ? "three" :
                  response.data.data[0].fav_mascot === 'Paw' ? "four" :
                    response.data.data[0].fav_mascot === 'Eagle' ? "five" :
                      response.data.data[0].fav_mascot === 'Lion' ? "six" :
                        response.data.data[0].fav_mascot === 'Bolt' ? "seven" : "eight"
            )
          }
        } else {
          setData(null)
        }
      } else {
        setData(null)
      }
    } catch (error) {
      setData(null)
    }
  }

  useEffect(() => {
    if (searchParams.get('secret_code')) {
      const code :any = searchParams.get('secret_code');
      setSecretCode(code)
      getData(code)
    }
  }, [])

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response: any = await axios.put(`https://api.brexe.com/sbplay/edit/${secretCode}`, {
        team_name: teamName,
        captain_name: captainName,
        partner_name: partnerName,
        fav_mascot: mascot
      })
      if (response.data.response === "success") {

      } else {
        setError(response.data.message)
      }
    } catch (error) {
      setError((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className=" m-contact fade-wrapper">
      <div className="container">
        <div className="row gaper align-items-center">

          <div className="col-12 col-lg-6 col-xl-6">
            <div className="m-contact__form">

              {/* {data ? <section className="section overview pb-0 ">
                <div className="container">
                  <div className="row gaper fade-wrapper">
                    <div className=" fade-top">
                      <div
                        className={
                          "overview__single "}
                      >
                        <div className="overview__thumb">
                          {selectedMascot && <Image src={selectedMascot} alt="Image" priority width={150} />}
                        </div>
                        <div className="overview__content">
                          <h4>{data.team_name}</h4>
                          <h6 className="tertiary-text mt-4">
                            Player 1 : {data.captain_name} <br/>
                            Player 2 : {data.partner_name} <br/>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
                : */}
                <section className="authentication2 auth-create">
                  <div className="authentication-wrapper">
                    <div className="authentication__content section">

                      <div className="authentication__inner">
                        <h3 className="title-animation fw-7 text-white text-uppercase mt-12">
                          {data ? 'TEAM REGISTERED SUCCESSFULLY' : 'REGISTER YOUR TEAM DETAILS'}
                        </h3>

                        <form action="#" method="post">
                          <div className="input-single">
                            <label htmlFor="createuserName">Captain&apos;s Name</label>
                            <div className="ic-group">
                              <input
                                type="text"
                                name="createuser-name"
                                id="createuserName"
                                placeholder="Captain's Name"
                                value={captainName}
                                onChange={(e: any) => setCaptainName(e.target.value)}
                                required
                                disabled={data}
                              />
                              <span className="material-symbols-outlined">
                                person
                              </span>
                            </div>
                          </div>
                          <div className="input-single">
                            <label htmlFor="createuserName">Partner&apos;s Name</label>
                            <div className="ic-group">
                              <input
                                type="text"
                                name="createuser-name"
                                id="createuserName"
                                value={partnerName}
                                placeholder="Partner&apos;s Name"
                                onChange={(e: any) => setPartnerName(e.target.value)}
                                required
                                disabled={data}
                              />
                              <span className="material-symbols-outlined">
                                handshake
                              </span>
                            </div>
                          </div>
                          <div className="input-single">
                            <label htmlFor="createuserName">Team Name</label>
                            <div className="ic-group">
                              <input
                                type="text"
                                name="createuser-name"
                                id="createuserName"
                                placeholder="Team Name"
                                value={teamName}
                                onChange={(e: any) => setTeamName(e.target.value)}
                                required
                                disabled={data}
                              />
                              <span className="material-symbols-outlined">
                                sports
                              </span>
                            </div>
                          </div>

                          <div className="input-single">
                            <label htmlFor="createPassword">Secret Code</label>
                            <div className="ic-group pass">
                              <span
                                className="material-symbols-outlined show-pass"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                              >
                                {passwordVisible ? "visibility" : "visibility_off"}
                              </span>
                              <input
                                type={passwordVisible ? "text" : "password"}
                                name="create-Password"
                                id="createPassword"
                                value={secretCode}
                                placeholder="Enter Secret"
                                disabled={data}
                                onChange={(e: any) => setSecretCode(e.target.value)}
                                required
                              />
                              <span className="material-symbols-outlined">key</span>
                            </div>
                          </div>
                          <div className="input-single">
                            <label htmlFor="createPassword">Favourite Mascot</label>
                            <div className="ic-group mb-4" >
                              <input
                                type="text"
                                name="createuser-name"
                                id="createuserName"
                                placeholder="Select or Enter your favourite mascot (Optional)"
                                required
                                value={mascot}
                                disabled={data}
                                onChange={(e: any) => setMascot(e.target.value)}
                              />
                              <span className="material-symbols-outlined">
                                swords
                              </span>
                            </div>
                            { !data && <MascotSelection opened={opened} setMascot={setMascot} />}
                          </div>

                          {!data && <div className="section__content-cta">
                            <button type="button" onClick={handleSubmit} disabled={loading || !captainName || !partnerName || !teamName || !secretCode} className={`btn btn--primary ${loading ? 'btn--loading' : ''}`} >
                              {loading ? 'Registering' : data ? 'Update Now' : 'Register Now'}
                            </button>
                          </div>}
                          {error && <div className="p-4 mt-3 rounded-xl" style={{ backgroundColor: '#dc3545', borderRadius: '10px', color: 'white' }}>
                            {error}
                          </div>}
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
                {/* } */}
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="m-contact__thumb reveal-img parallax-img">
              <Image src={thumb} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
