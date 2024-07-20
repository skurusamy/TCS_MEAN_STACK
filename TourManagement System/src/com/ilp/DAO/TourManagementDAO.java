package com.ilp.DAO;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.ilp.Helper.DBConnectionHelper;


public class TourManagementDAO {
	public boolean login(String loginid, String password,String usertype) {
		Connection connection = null;
		DBConnectionHelper helper = new DBConnectionHelper();
		connection = helper.getOracleConnection();
		Statement statement = null;
		ResultSet resultSet = null;
		String psd=null,type=null;
		boolean result=false;
		try {
			statement = connection.createStatement();
			String sql = "SELECT PASSWORD,USER_TYPE FROM LOGIN_MST WHERE LOGIN_ID='"+loginid+"'";
			resultSet = statement.executeQuery(sql);
			
			while (resultSet.next()) {
				psd = resultSet.getString(1);
				type = resultSet.getString(2);
			}
			if(psd.equals(password)&& usertype.equals(type)) {
				result = true;
			}
			else
				result = false;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (resultSet != null) {
				try {
					resultSet.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			try {
				if (statement != null)
					statement.close();
				//System.out.println("STATEMENT SUCCESSFULLY CLOSED");
			} catch (SQLException se) {
			}// do nothing
			try {
				if (connection != null)
					connection.close();
			//	System.out.println("CONNECTION SUCCESSFULLY CLOSED");
			} catch (SQLException se) {
				se.printStackTrace();
			}// end finally try
			
		}// end try	
		
		return result;

		

	}
}
