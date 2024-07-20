package com.ilp.Controller;

import java.io.IOException;
import java.io.PrintWriter;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.ilp.DAO.TourManagementDAO;

/**
 * Servlet implementation class LoginController
 */
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		PrintWriter out = response.getWriter();
		response.setContentType("text/html");
		System.out.println("In Login Controller");
		String loginid = request.getParameter("loginid").trim();
		String password = request.getParameter("password").trim();
		String usertype = request.getParameter("usertype").trim();
		
		//Validation
		if(password.length()<6) {
			
			out.println("<html><head>");
			out.println("<script type=\"text/javascript\">");
			out.println("window.alert('Password Less than 6 characters');");
			out.println("</script>");
			out.println("</head><body></body></html>");
			//System.out.println("In passsword error");
			response.sendRedirect("HomePage.html");
		}
		if(usertype.equals("ADMIN") && usertype.contentEquals("MEMBER")) {
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Wrong UserType');");
			out.println("</script>");
			
			response.sendRedirect("HomePage.html");
		}
		TourManagementDAO tdao = new TourManagementDAO();
		boolean result = tdao.login(loginid,password,usertype);
		if(result) {
			if(usertype.equals("ADMIN"))
				response.sendRedirect("AdminOption.html");
			else
				response.sendRedirect("MemberOption.html");
		}
		else {
			response.sendRedirect("HomePage.html");
		}
		
	}

}
